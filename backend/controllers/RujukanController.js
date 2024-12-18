import Rujukan from '../models/RujukanModel.js';

export const getRujukan = async (req, res) => {
  try {
    const rujukan = await Rujukan.findAll();
    res.json(rujukan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRujukanById = async (req, res) => {
  try {
    const rujukan = await Rujukan.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (rujukan) {
      res.json(rujukan);
    } else {
      res.status(404).json({ message: 'Rujukan not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createRujukan = async (req, res) => {
  try {
    const rujukan = await Rujukan.create(req.body);
    res.status(201).json(rujukan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateRujukan = async (req, res) => {
  try {
    const updated = await Rujukan.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updated[0]) {
      res.json({ message: 'Rujukan updated successfully' });
    } else {
      res.status(404).json({ message: 'Rujukan not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteRujukan = async (req, res) => {
  try {
    const deleted = await Rujukan.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deleted) {
      res.json({ message: 'Rujukan deleted successfully' });
    } else {
      res.status(404).json({ message: 'Rujukan not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
