const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('Started index.js');
  console.log(process.argv);
});