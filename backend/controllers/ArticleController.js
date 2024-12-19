import Article from '../models/ArticleModel.js';
import { JSDOM } from 'jsdom';
import Users from '../models/UserModel.js';

// Create a new article
export const createArticle = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Validate required fields
    if (!title || !content || !author) {
      return res.status(400).json({
        message: 'Title, content, and author are required',
      });
    }

    // Content size check
    if (content.length > 16777215) {
      return res.status(413).json({
        message: 'Content too large. Maximum size is 16MB',
      });
    }

    // Create virtual DOM to extract description
    const dom = new JSDOM(content);
    const plainText = dom.window.document.body.textContent || '';
    const description = plainText.substring(0, 200).trim();

    const article = await Article.create({
      title,
      content,
      author,
      description,
      date: new Date(),
    });

    res.status(201).json({
      message: 'Article created successfully',
      article,
    });
  } catch (error) {
    console.error('Create article error:', error);
    res.status(500).json({
      message: 'Server error while processing article',
      error: error.message,
    });
  }
};

// Get all articles
export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll({
      order: [['date', 'DESC']],
      include: [
        {
          model: Users,
          attributes: ['images'],
          as: 'user',
        },
      ],
    });

    const processedArticles = articles.map((article) => {
      const plainArticle = article.get({ plain: true });
      return {
        ...plainArticle,
        authorImage: plainArticle.user?.images,
      };
    });

    res.json(processedArticles);
  } catch (error) {
    console.error('Get articles error:', error);
    res.status(500).json({
      message: 'Error fetching articles',
      error: error.message,
    });
  }
};

// Get a single article by ID
export const getArticleById = async (req, res) => {
  try {
    const article = await Article.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Users,
          as: 'user',
          attributes: ['images', 'name'],
        },
      ],
    });

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    const processedArticle = {
      ...article.get({ plain: true }),
      author: article.user?.name || article.author,
      authorImage: article.user?.images || null,
    };

    res.json(processedArticle);
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({
      message: 'Error fetching article',
      error: error.message,
    });
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

export const getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: [
        {
          model: Users,
          as: 'user',
          attributes: ['images', 'name'],
        },
      ],
      order: [['date', 'DESC']],
    });

    if (!articles) {
      return res.status(404).json({ message: 'No articles found' });
    }

    const processedArticles = articles.map((article) => {
      const plainArticle = article.get({ plain: true });
      return {
        ...plainArticle,
        author: plainArticle.user?.name || plainArticle.author,
        authorImage: plainArticle.user?.images || null,
      };
    });

    res.json(processedArticles);
  } catch (error) {
    console.error('Error in getArticles:', error);
    res.status(500).json({
      message: 'Error fetching articles',
      error: error.message,
    });
  }
};
