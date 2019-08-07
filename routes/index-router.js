//Routage
const express = require('express');
const router = express.Router();

//On ajoute nos routes
router.get('/', (req, res) => {
    res.render('index.pug', {
        name:'TiBo'
    });
});

router.get('/contact', (req, res) => {
    res.render('contacts.pug');
});

// On exporte le routeur
module.exports = router;