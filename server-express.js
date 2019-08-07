const express = require('express');
const app = express();

//On récupère nos routes
const indexRouter = require(__dirname + '/routes/index-router.js');
const apiRouter = require(__dirname + '/routes/api-router.js');

//Initialisation du moteur de template
app.set('view engine', 'pug');
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/contact', indexRouter);
app.use('/api', apiRouter);
app.listen(3000,()=>console.log("Serveur Web lancé sur http://localhost:3000"));