import Article from '../models/ArticleModel.js';

// Create a new article
export const createArticle = async (req, res) => {
  try {
    const { author, title, description, content } = req.body;

    const article = await Article.create({
      author,
      title,
      description,
      content,
      date: new Date(),
    });

    res.status(201).json({ msg: 'Article created successfully', article });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Get all articles
export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll({
      order: [['date', 'DESC']],
    });
    console.log('Fetched articles:', articles); // Debug log
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({
      message: 'Error fetching articles',
      error: error.message,
    });
  }
};

// Get a single article by ID
export const getArticleById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ msg: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update an article by ID
export const updateArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ msg: 'Article not found' });
    await Article.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ msg: 'Article updated successfully' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Delete an article by ID
export const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ msg: 'Article not found' });
    await Article.destroy({
      where: { id: req.params.id },
    });
    res.json({ msg: 'Article deleted successfully' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
