//Routage
const express = require('express');
const router = express.Router();


//On ajoute nos routes
/*
router.put('/produits/edit', (req, res, next)=>{
    console.log('Acces à l\'API');
    next()
    }, (req, res) => {
        //Recuperation des variable POST
        res.json({message: 'le produit a bien été modifié'});
    });
*/
router.route('/')
    .get((req, res)=>res.json({'message':'Liste des produits'}))
    .post((req,res)=>res.json({'message':'Création d\'un produit'}))
    .put((req,res)=>res.json({'message':'Mise a jour du produit'}))
    .delete((req,res)=>res.json({'message':'Suppression d\'un produit'}))
;
router.get('/:id'), (req, res)=> {
    res.json({
        'datas':{
            id:id
        },
        'message':'Detail d\'un produit'})
};

// On exporte le routeur
module.exports = router;


