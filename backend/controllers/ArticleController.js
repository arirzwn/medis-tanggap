import Article from '../models/ArticleModel.js';

// Create a new article
export const createArticle = async (req, res) => {
  try {
    const { author, title, header, date, description } = req.body;

    console.log('Request Body:', req.body); // Tambahkan log untuk memeriksa data yang diterima

    const article = await Article.create({
      author,
      title,
      header, // Tambahkan header
      date,
      description,
    });
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all articles
export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get articles for frontend
export const getAllArticlesForFrontend = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single article by ID
export const getArticleById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an article by ID
export const updateArticle = async (req, res) => {
  try {
    const article = await Article.update(req.body, {
      where: { id: req.params.id },
    });
    if (!article[0])
      return res.status(404).json({ message: 'Article not found' });
    res.status(200).json({ message: 'Article updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an article by ID
export const deleteArticle = async (req, res) => {
  try {
    const result = await Article.destroy({
      where: { id: req.params.id },
    });
    if (!result) return res.status(404).json({ message: 'Article not found' });
    res.status(200).json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
