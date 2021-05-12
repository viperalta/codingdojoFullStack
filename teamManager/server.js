const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
 
require('./server/config/connectMongo')(); 
//require('./server/config/mongoose.config');
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//require('./server/routes')(app); 
require('./server/routes/player.routes')(app);
 
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})