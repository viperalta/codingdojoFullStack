const mongoose=require('mongoose');

const PlayerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        minlength:[3,'El nombre debe ser de al menos 3 caracteres']
    },
    position:{
        type:String,
        required:[true,'La posición del jugador es obligatoria']
    },
    game1:{
        type:String,
        default:'noJugar'
    },
    game2:{
        type:String,
        default:'Indeciso'
    },
    game3:{
        type:String,
        default:'Indeciso'
    }
},{timestamps:true});

module.exports.Player = mongoose.model('Player',PlayerSchema);