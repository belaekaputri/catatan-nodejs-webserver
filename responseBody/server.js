const http=require('http');
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    const { method, url } = request;
 
    if (url==='/'){
        if(method==='GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({message:'Halaman Tidak Ditemukan'}));
        }else{
            response.statusCode = 400;
            response.end(JSON.stringify({message:`Halaman tidak dapat diakse dengan ${method} request</h1>`}));
        }
    }

    else if(url==='/about'){
        if(method==='GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({message:'Halo! ini adalah halaman about'}));
        }else if (method==='POST'){
            let body=[];
            request.on('data',(chunk)=>{
            body.push(chunk);
        });
        request.on('end',()=>{
            body=Buffer.concat(body).toString();
            const {name}=JSON.parse(body);
            response.statusCode = 200;
            response.end(JSON.stringify({message:`Halo, ${name}! ini adalah halaman about`}));
        });
        }else{
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    }else{
        response.statusCode = 404;
        response.end(JSON.stringify({message:'Halaman Tidak Ditemukan'}));
    }
    };
    const server=http.createServer(requestListener);

    const port=5000;
    const host='localhost';

    server.listen(port,host,()=>{
        console.log(`Server berjalan pada http://${host}:${port}`);
    });
   