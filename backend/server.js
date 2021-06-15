import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware';
import connectDb from './config/db';
import router from './routes';

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

//api router
app.use('/api', router);

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
