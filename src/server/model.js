const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QandASchema = new Schema({
    category: String,
    topic: String,
    question: String,
    answer: String
});

module.exports = mongoose.model('QandA', QandASchema);