const http = require ('http');

//console.log(http);

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type' : 'text/plain; charset=utf-8'});

    switch (req.url) {
        case '/':
            res.end('Este el HOME')
            break;
        
        case '/productos':
            res.end('Estos son nuestros productos')
            break;

        case '/contacto':
            res.end('Dejanos tus mensajes')
            break;
    
        default:
            res.end('Pagina no disponible, vuelva mas tarde')
            break;
    }


    res.end('Mi primer servidor en Node JS');


}).listen(3030,'localhost',()=>console.log('servidor funcionando en el puerto 3030'))