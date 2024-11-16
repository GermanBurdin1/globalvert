const express = require('express');
const ordersRoutes = require('./routes/orders');

const app = express();
const port = 3000;

app.use(express.json()); 
app.use('/orders', ordersRoutes);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
