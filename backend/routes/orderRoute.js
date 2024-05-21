import express from 'express'
const orderRouter = express.Router();
import { listOrders, placeOrder , updateStatus, userOrders, verifyOrder } from '../controllers/orderController.js';
import authMiddleware from '../middlewares/auth.js';

//to place an order
orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/verify',verifyOrder)
orderRouter.post('/userorders',authMiddleware,userOrders);
orderRouter.get('/list',listOrders)
orderRouter.post('/status',updateStatus)

export default orderRouter
