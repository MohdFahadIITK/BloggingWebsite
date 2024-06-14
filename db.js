const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mohdfahadknp2019:OYn7IOgcbAqziOwk@cluster0.l6cd3cf.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const { Schema, model } = mongoose;

const commentSchema = new Schema({
    title: String,
    name: String,
    comment: String,
});

const Comment = model('Comment', commentSchema);

module.exports = { Comment };
