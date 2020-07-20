const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  //Объект с описанием полей и их типом
  name: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: ''
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
});

//Конструкция типа(название таблицы, название схемы - в данном случае это categorySchema )
module.exports = mongoose.model('categories', categorySchema);
