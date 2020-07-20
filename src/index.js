const app = require('./app');

//Задаем значение порта
const port = process.env.PORT || 5000;
//Слушаем порт
app.listen(port, () => console.log(`Server has been started on port ${port}`));
