import { v2 as cloudinary } from 'cloudinary';

// Konfigurasi Cloudinary dengan kredensial langsung
cloudinary.config({
  cloud_name: 'dbu5xnoj7', // Ganti dengan nama Cloudinary Anda
  api_key: '953233222181362', // Ganti dengan API Key Cloudinary Anda
  api_secret: 'r6N4BrTPrA9lP6PMHZbQH7M-ur8', // Ganti dengan API Secret Cloudinary Anda
});

export default cloudinary;
