import Clinic from '../models/ClinicModel.js';

// Fungsi untuk menambahkan klinik
export const addClinic = async (req, res) => {
  try {
    const { clinic_name, address, user_id } = req.body;

    // Pastikan file telah di-upload melalui multer
    if (!req.files || !req.files.ktp_owner || !req.files.operation_license) {
      return res.status(400).json({ message: "KTP dan Surat Izin harus di-upload" });
    }

    const ktpOwnerFile = req.files.ktp_owner[0]; // File KTP
    const operationLicenseFile = req.files.operation_license[0]; // File Surat Izin

    // Simpan data klinik ke dalam database
    const newClinic = await Clinic.create({
      clinic_name,
      address,
      ktp_owner: ktpOwnerFile.filename, // Simpan nama file
      operation_license: operationLicenseFile.filename, // Simpan nama file
      user_id,
    });

    res.status(201).json({
      message: 'Klinik berhasil ditambahkan!',
      data: newClinic,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Gagal menambahkan klinik', error: error.message });
  }
};

export default addClinic;
