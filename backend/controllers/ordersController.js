const db = require('../db/connection');

exports.createOrder = (req, res) => {
  const { customerId, items } = req.body;
  const orderQuery = 'INSERT INTO commande (order_date, total_amount, Id_customer) VALUES (NOW(), ?, ?)';
  const totalAmount = items.reduce((sum, item) => sum + item.unit_price * item.quantity, 0);

  db.query(orderQuery, [totalAmount, customerId], (err, result) => {
    if (err) {
      console.error('Ошибка при создании заказа:', err);
      return res.status(500).json({ error: 'Ошибка при создании заказа' });
    }

    const orderId = result.insertId;
    const itemQueries = items.map(item => {
      return new Promise((resolve, reject) => {
        const itemQuery = 'INSERT INTO lier (Id_order, Id_item) VALUES (?, ?)';
        db.query(itemQuery, [orderId, item.Id_item], (err, result) => {
          if (err) return reject(err);
          resolve(result);
        });
      });
    });

    Promise.all(itemQueries)
      .then(() => {
        res.status(201).json({ message: 'Заказ успешно создан', orderId });
      })
      .catch(err => {
        console.error('Ошибка при добавлении товаров к заказу:', err);
        res.status(500).json({ error: 'Ошибка при добавлении товаров к заказу' });
      });
  });
};
