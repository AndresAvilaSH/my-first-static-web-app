module.exports = async function (context, req) {
    context.res.json({
        text: "Hola Team esto es un mensaje del API, trigereado por un HTTP. Con esto podemos conectar paginas, subir y bajar datos de nuestra DB, enviarnos notificaciones, etc"
    });
};