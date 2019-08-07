//Routage
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('tchat.pug');
});

// On exporte le routeur
module.exports = router;