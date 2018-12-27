var mongoose = require('mongoose')
var Todo = mongoose.model('Todo', {
    text : {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default:null

    }
})

module.exports = {Todo}
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((docs) => {
//     console.log(JSON.stringify(docs, undefined, 2))
// }, (e) => {
//     console.log('Unable to save to do')
// });