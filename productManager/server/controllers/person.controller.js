const {Person}=require('../models/person.model')

module.exports.index = (request,response) =>{
    response.json({
        message: 'hello mern'
    })
}

module.exports.createPerson=(request,response)=>{
    const {firstName,lastName}=request.body;
    Person.create({
        firstName,
        lastName
    })
    .then(person=>response.json(person))
    .catch(err=>response.json(err))
}