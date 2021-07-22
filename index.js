const express = require('express');
const cors = require('cors');
const textsRouter = require('./routes/texts.js');
const imagesRouter = require('./routes/images.js');
const { port, frontendUrl, adminUrl } = require('./config.js');
const linksRouter = require('./routes/links.js');

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: { frontendUrl, adminUrl } }));

app.use('/texts', textsRouter);
app.use('/images', imagesRouter);
app.use('/links', linksRouter);

app.use('/', (req, res) => {
  res.status(404).send('Route not found! ');
});

app.listen(port, () => {
  console.log(`API now available on http://localhost:${port} !`);
});
