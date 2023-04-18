const http= require('http'); //default modul dari nodejs

const requestListener=(request,Response)=>{ //request dari client & respon pengembalian dari server
    Response.setHeader('Content-Type','text/html');

    Response.statusCode=200;
    Response.end('<h1> Halo HTTP Server! </h1>');
};

const server =http.createServer(requestListener);
const port=5000;
const host='localhost';

server.listen(port,host,()=>{ //port,host,listeninglistener(functio) yg dipakai
    //method listen untuk standby apabila permintaan masuk dari client
   //4 parameter port,hostname,backlog(maksimal koneksi pendig pada http server), listeningListener:callback http server sedang bekerja
    console.log(`Server berjalan pada http://${host}:${port}`);
});