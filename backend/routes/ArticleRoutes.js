import express from 'express';
import {
  getArticles,
  getArticleById,
  createArticle,
} from '../controllers/ArticleController.js';

const router = express.Router();

router.get('/articles', getArticles);
router.get('/articles/:id', getArticleById);
router.post('/articles', createArticle);

export default router;
