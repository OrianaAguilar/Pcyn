// main.js
import express from 'express';
import urls from './urls.js';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/', urls);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
