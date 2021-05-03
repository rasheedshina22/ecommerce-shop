import express from 'express';
import dotenv from 'dotenv';
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

const server = require('http').createServer(app);
// const io = require('socket.io')(server, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//     credentials: true,
//   },
// });

//parses json data
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

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

// io.on('connection', (socket) => {
//   console.log('connected');

//   socket.on('hello', (data) => {
//     console.log(data);
//   });

//   socket.on('disconnect', () => console.log('disconnected'));
// });

server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} `.yellow
      .bold
  )
);
