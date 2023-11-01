import express from 'express';
const router = express.Router();


import { isAuthenticatedUser} from '../middlewares/auth.js';
import { createBorrowing, deleteBorrowing, getBorrowing, getBorrowingById, returnBorrowing, updateBorrowing } from '../controllers/borrowingController.js';

router.use(isAuthenticatedUser);

router.route('/borrowings').get(getBorrowing);
router.route('/borrowing/:id').get(getBorrowingById);
router.route('/borrowings').post(createBorrowing);
router.route('/borrowing/:id').put(updateBorrowing);
router.route('/return-borrowing/:id').put(returnBorrowing);
router.route('/borrowing/:id').delete(deleteBorrowing);

export default router;