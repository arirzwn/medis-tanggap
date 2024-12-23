import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinaryConfig.js'; // Path ke konfigurasi Cloudinary

// Konfigurasi penyimpanan di Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Nama folder di Cloudinary
    format: async (req, file) => {
      const fileType = file.mimetype.split('/')[1]; // Ekstensi file berdasarkan mimetype
      return fileType; // Gunakan ekstensi asli file (jpeg/png)
    },
    public_id: (req, file) => {
      // Tambahkan timestamp untuk membuat nama file unik
      return `${Date.now()}-${file.originalname}`;
    },
  },
});

// Filter untuk memeriksa tipe file yang diizinkan
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']; // Jenis file yang diterima
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // File diterima
  } else {
    cb(new Error('Tipe file tidak valid. Hanya JPEG, PNG, dan PDF yang diperbolehkan.'), false); // File ditolak
  }
};

// Batas ukuran file maksimum (5MB)
const maxSize = 5 * 1024 * 1024; // 5MB

// Inisialisasi middleware multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: maxSize },
}).fields([
  { name: 'ktp_owner', maxCount: 1 }, // Nama field untuk KTP
  { name: 'operation_license', maxCount: 1 }, // Nama field untuk Surat Izin
  { name: 'images', maxCount: 1 }, // Nama field untuk Gambar
]);

export default upload;
