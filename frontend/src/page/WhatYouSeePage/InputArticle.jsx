import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarKlinik from '../../components/sidebarKlinik';
import './input.css';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert

const EditorComponent = () => {
  const [value, setValue] = useState('');
  const [author, setAuthor] = useState('');
  const [userId, setUserId] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  useEffect(() => {
    // Get user data directly from localStorage and parse it
    const storedUser = localStorage.getItem('user');
    console.log('Stored user data:', storedUser); // Debug log

    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        console.log('Parsed user data:', userData); // Debug log

        if (userData && userData.id) {
          setUserId(userData.id);
          // Optionally set author name if not already set
          if (!author) {
            setAuthor(userData.name);
          }
        } else {
          console.error('No user ID found in stored data');
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }

    if (isEditMode) {
      fetchArticle();
    }
  }, [id]);

  const fetchArticle = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/articles/${id}`);
      const data = await response.json();
      if (response.ok) {
        setValue(data.content);
        setAuthor(data.author);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error fetching article:', error);
      alert('Error loading article');
    }
  };

  const extractTitle = (content) => {
    console.log('Raw content:', content);

    // Create a temporary div to parse HTML content
    const div = document.createElement('div');
    div.innerHTML = content;

    // Find all heading elements
    const headings = Array.from(
      div.querySelectorAll('h1, h2, h3, h4, h5, h6')
    ).filter((heading) => {
      // Get only the text content, removing any nested elements
      const text = heading.textContent.trim();
      return text.length > 0;
    });

    console.log('Found valid headings:', headings);

    if (!headings.length) {
      throw new Error(
        'Please add a heading (H1-H6) to your article to set the title'
      );
    }

    // Get the text content of the first valid heading
    const title = headings[0].textContent.trim();
    console.log('Extracted title:', title);

    return title;
  };

  const handleSubmit = async () => {
    if (!value.trim() || !author.trim()) {
      Swal.fire('Error', 'Harap lengkapi semua kolom', 'error');
      return;
    }

    try {
      const title = extractTitle(value);
      const url = `http://localhost:5000/api/articles/${isEditMode ? id : ''}`;
      const method = isEditMode ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content: value,
          author: author.trim(),
          userId: userId, // Include userId in the request
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage;
        try {
          const errorJson = JSON.parse(errorText);
          errorMessage = errorJson.message || 'Gagal menyimpan artikel';
        } catch (e) {
          errorMessage = 'Terjadi kesalahan pada server';
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();

      await Swal.fire({
        title: isEditMode ? 'Artikel Diperbarui' : 'Artikel Diterbitkan',
        text: isEditMode
          ? 'Artikel Anda berhasil diperbarui.'
          : 'Artikel Anda berhasil diterbitkan.',
        icon: 'success',
        confirmButtonText: 'Oke',
      });

      navigate('/dashboard/artikel');
    } catch (error) {
      console.error('Submission error:', error);
      Swal.fire('Error', error.message, 'error');
    }
  };

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline'], // toggled buttons
    ['link', 'image'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  return (
    <div className="d-flex wrap-all">
      <SidebarKlinik />
      <div className="container-fluid mt-4 flex-grow-1 right-input">
        <h2 className="mb-4">
          {isEditMode ? 'Edit Artikel' : 'Buat Artikel Baru'}
        </h2>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="User ID"
          value={userId}
          disabled
          style={{ backgroundColor: '#e9ecef' }}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Nama Penulis"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <div className="mb-2 text-muted">
          Gunakan format judul (H1-H6) untuk judul artikel Anda
        </div>
        <ReactQuill
          modules={module}
          theme="snow"
          value={value}
          onChange={setValue}
          style={{ minHeight: '100px' }}
        />
        <button
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={!value.trim() || !author.trim()}
        >
          {isEditMode ? 'Memperbarui' : 'Kirim'}
        </button>
      </div>
      <style>
        {`
          .bg-light {
            display: none !important;
          }
        `}
      </style>
    </div>
  );
};

export default EditorComponent;
