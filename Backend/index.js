import express from 'express';
import cors from "cors";
import 'dotenv/config';
import passport from 'passport';
import './src/utils/passport.js';
import session from 'express-session';
import connectDB from './src/db/index.js';
import connectCloudinary from './src/utils/cloudinary.js';

import userRouter from './src/routes/user.route.js';
import productRouter from './src/routes/product.route.js';
import cartRouter from './src/routes/cart.route.js';
import orderRouter from './src/routes/order.route.js';
import enquiryRouter from './src/routes/enquiry.route.js';
import authRouter from './src/routes/auth.route.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: 'cyberwolve', 
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, 
    })
);

app.use(passport.initialize());
app.use(passport.session());

connectCloudinary();
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server Running on Port: ${port}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
    });

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/enquiry', enquiryRouter);
app.use("/auth", authRouter);
