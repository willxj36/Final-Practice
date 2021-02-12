import * as express from 'express';
import booksRouter from './books';
import categoriesRouter from './categories';
import usersRouter from './users';
import tokensRouter from './tokens';

const router = express.Router();

router.use('/books', booksRouter);
router.use('/categories', categoriesRouter);
router.use('/users', usersRouter);
router.use('/tokens', tokensRouter);

export default router;