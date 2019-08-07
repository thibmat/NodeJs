
$(function(){
    console.log('chargement du JS coté navigateur');
    const tchat =  $("#tchat");
    tchat.hide();
    let socket = io();

/*
    socket.on('connect', function () {
        document.getElementById('tchatConnection').innerHTML = '';
        socket.on('bienvenue', function (data) {
            socket.emit('nouveau-message', {message: 'Bonjour !'});
        });
        socket.on('notif-message', function (data) {
            document.getElementById('msg').innerHTML = data.bonjour;
        });
        socket.on('confirm', data => {
            console.log('statut de la confirmation :' + data.status)
        })
    });
 */
    /**
     * Gestion du formulaire de connexion au tchat
     */
    $('#tchatConnection').on('submit', tchatConnection);
    function tchatConnection(event){
        event.preventDefault();
        //Recuperation du nom de l'utilisateur
        const username = $("#username").val();
        socket.emit('tchatConnection', {username: username});
        socket.on('initTchat', initTchat);

    }

    /**
     * Cache le formulaire de connection et affichage du tchat
     * todo : afficher les derniers messages envoyés
     * @param datas
     */
    function initTchat (datas){
        $('#tchatConnection').fadeOut(() => tchat.fadeIn());
    }

});
