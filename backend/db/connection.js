const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Замените на ваши данные
  password: '', // Замените на ваш пароль
  database: 'your_database_name' // Замените на название вашей базы данных
});

db.connect(err => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Подключено к базе данных MySQL');
  }
});

module.exports = db;
