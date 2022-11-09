import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from "mongoose";

import routes from './src/routes/crmRoutes'


const app = express();
const PORT = 4002;

app.use(
  cors({
    origin:'*',
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shoes',{
  useNewUrlParser:true,
  useUnifiedTopology:true
});



app.listen(PORT, () => 
  console.log(`Your server is running on port ${PORT}`)
);
