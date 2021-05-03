import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware';
import connectDb from './config/db';

//routes
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoute';
import orderRoutes from './routes/orderRoutes';
import uploadRoute from './routes/uploadRoute';

dotenv.config();

connectDb();
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//parses json data
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoute);

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

//error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} `.yellow
      .bold
  )
);
