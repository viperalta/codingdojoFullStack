const AuthorController = require('./controllers/author.controller');

module.exports = function(app){

    //AUTHOR CRUD ROUTES
    app.post('/api/author/add',AuthorController.createAuthor)
    app.get('/api/authors/',AuthorController.getAll)
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);

    //ANOTHER ONE
    

}