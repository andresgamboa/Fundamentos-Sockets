

const socketController = ( socket ) => {

    console.log( 'Cliente conectado.' , socket.id );

    socket.on("disconnect" , () =>{
        console.log('Cliente desconectado' , socket.id);
    });


    socket.on( 'enviar-mensaje' , ( payload , callback ) => {
       
        socket.broadcast.emit('enviar-mensaje' , payload);

        const id = 123456678;
        callback({ id , fecha: new Date().getTime() });
    });


}


module.exports = {
    socketController
}