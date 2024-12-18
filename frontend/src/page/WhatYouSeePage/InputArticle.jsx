import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate } from 'react-router-dom';

const EditorComponent = () => {
  const [value, setValue] = useState('');
  const [author, setAuthor] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  useEffect(() => {
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
      alert('Please fill in all fields');
      return;
    }

    try {
      const title = extractTitle(value);
      const url = isEditMode
        ? `http://localhost:5000/api/articles/${id}`
        : 'http://localhost:5000/api/articles';
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
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to save article');
      }

      alert(
        isEditMode
          ? 'Article updated successfully'
          : 'Article published successfully'
      );
      navigate('/dashboard/artikel');
    } catch (error) {
      console.error('Submission error:', error);
      alert(
        error.message ||
          'Error saving article. Make sure to add a heading for the title.'
      );
    }
  };

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline'], // toggled buttons
    // ['blockquote'],
    ['link', 'image'],

    // [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    // [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    // [{ direction: 'rtl' }], // text direction

    // [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    // [{ font: [] }],
    [{ align: [] }],

    // ['clean'], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        {isEditMode ? 'Edit Article' : 'Create New Article'}
      </h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <div className="mb-2 text-muted">
        Use heading formats (H1-H6) for your article title
      </div>
      <ReactQuill
        modules={module}
        theme="snow"
        value={value}
        onChange={setValue}
        className="bg-white"
        style={{ minHeight: '400px' }}
      />
      <button
        className="btn btn-primary mt-3"
        onClick={handleSubmit}
        disabled={!value.trim() || !author.trim()}
      >
        {isEditMode ? 'Update' : 'Publish'}
      </button>
    </div>
  );
};

export default EditorComponent;
