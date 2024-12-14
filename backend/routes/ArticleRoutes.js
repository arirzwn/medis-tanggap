import express from 'express';
import {
  getAllArticles,
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
} from '../controllers/ArticleController.js';

const router = express.Router();

router.get('/articles', getAllArticles);
router.get('/articles/:id', getArticleById);
router.post('/articles', createArticle);
router.put('/articles/:id', updateArticle);
router.delete('/articles/:id', deleteArticle);

export default router;
