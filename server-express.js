const express = require('express');
const app = express();
//Parse du corps de la requête
const bodyParser = require('body-parser');
//surcharge de la methode HtTP pour les method restful
const methodOverride = require('method-override');
const restfulMethod = require('./middlewares/restful-Method.js');
const socketIo = require('socket.io');
const tchatServer = require('./socketIo/tchat-server.js');


//On récupère nos routes
const indexRouter = require(__dirname + '/routes/index-router.js');
const apiRouter = require(__dirname + '/routes/api-router.js');
const tchatrouter = require(__dirname + '/routes/tchat-router.js');

//Initialisation du moteur de template
app.set('view engine', 'pug');

//Ressources statiques
app.use('/socketio',express.static('node_modules/socket.io-client/dist'));
app.use(express.static('public'));

//Les middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride(restfulMethod));

//Gestion des sockets
let io = socketIo();
tchatServer(io);



//Routage
app.use('/', indexRouter);
app.use('/contact', indexRouter);
app.use('/api/products', apiRouter);
app.use('/tchat', tchatrouter);

//Lancement du serveur
const server = require('http').Server(app);
server.listen(3000,()=>console.log("Serveur Web lancé sur http://localhost:3000"));
io.listen(server);