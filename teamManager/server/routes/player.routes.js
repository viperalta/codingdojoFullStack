const PlayerController = require('../controllers/player.controller');

module.exports = function(app){

    //AUTHOR CRUD ROUTES
    app.post('/api/player/add',PlayerController.createPlayer)
    app.get('/api/players/',PlayerController.getAll)
    app.get('/api/player/:id', PlayerController.getPlayer);
    app.put('/api/player/:id', PlayerController.updatePlayer);
    app.delete('/api/player/:id', PlayerController.deletePlayer); 

}