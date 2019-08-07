let tib ;
module.exports = (io) => {
    //Un client se connecte
    tib = io;
    io.on('connection', connection);
};

/**
 * Gestion de la connection d'un nouveau client
 */
function connection(socket) {
    socket.on('tchatConnection', (data)=> {
        tchatConnection(data, socket);
    });
}
let clients = [];

function tchatConnection(data, socket){
    clients[socket.id] = data.username;
    //on envoie les derniers messages pour initialiser le chat
    socket.emit('initTchat', {
        message: []
    });
}
function newMessage(data, socket){
    console.log(socket);
    console.log('Nouveau message recu : ' + data.message);
    socket.emit('confirm', {status: 'ok'})
}

