const http = require('http');
const server = http.createServer((request, response)=> {
    if(request.url === '/') 
    {
        response.end('whelcome to our pageio');
    }
    if(request.url === '/about'){
        response.end('here is our short history');
    }
    
    response.end(`
                <h1> error 404 </h1>
                <p> we can't find what you are looking for</p>
                <a href: "/"> Back Home </a>`);
});
server.listen(7676);

