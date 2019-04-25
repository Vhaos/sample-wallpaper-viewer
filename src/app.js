//import all the modules I'll need
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/index.js';
const app = express();

//parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//include routes and enable cross origin
app.use(cors());
app.use(router);

//listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});