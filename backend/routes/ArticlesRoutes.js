import express from 'express';
import * as ArticleController from '../controllers/ArticleController.js';

const router = express.Router();

// Create a new article
router.post('/articles', ArticleController.createArticle);

// Get all articles
router.get('/articles', ArticleController.getAllArticles);

// Get a single article by ID
router.get('/articles/:id', ArticleController.getArticleById);

// Get articles for frontend
router.get('/frontend/articles', ArticleController.getAllArticlesForFrontend);

// Update an article by ID
router.put('/articles/:id', ArticleController.updateArticle);

// Delete an article by ID
router.delete('/articles/:id', ArticleController.deleteArticle);

export default router;
