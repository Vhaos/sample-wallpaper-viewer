import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use('/api/v1',router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});