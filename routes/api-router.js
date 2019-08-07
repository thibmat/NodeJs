//Routage
const express = require('express');
const router = express.Router();
const restfulMethod = require ('./../middlewares/restful-method.js');

//On ajoute nos routes
router.all('/produits/edit', (req, res) => {
    restfulMethod(res);


    res.json({message: 'le produit a bien été modifié'});
});

// On exporte le routeur
module.exports = router;