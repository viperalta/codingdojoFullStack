const mongoose=require('mongoose');

const AuthorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        minlength:[3,'El nombre debe ser de al menos 3 caracteres']
    },
},{timestamps:true});

module.exports.Author = mongoose.model('Author',AuthorSchema);