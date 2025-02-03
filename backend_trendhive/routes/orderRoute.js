import express from "express";

import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  verifyRazorpay,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);
orderRouter.post("/place", authUser, placeOrder); //payment features
orderRouter.post("/stripe", authUser, placeOrderStripe); //payment features
orderRouter.post("/razorpay", authUser, placeOrderRazorpay); //payment features
orderRouter.post("/userorders", authUser, userOrders); //User Features
orderRouter.post("/verifyStripe", authUser, verifyStripe); //verify payment
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay); //verify payment

export default orderRouter;
