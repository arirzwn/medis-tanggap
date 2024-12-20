import express from 'express';
import {
  getArticles,
  getArticleById,
  createArticle,
  getUserImagesByRole
} from '../controllers/ArticleController.js';

const router = express.Router();

router.get('/articles', getArticles);
router.get('/articles/:id', getArticleById);
router.post('/articles', createArticle);
router.get('/articles/user-images', getUserImagesByRole);

export default router;
