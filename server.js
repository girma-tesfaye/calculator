const http = require('http');
const fs = require("fs");

const handleFunction = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile("./public/index.html", null, (error, data)=>{
        if (error) {
            response.writeHead(404);
            response.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
})
}
http.createServer(handleFunction).listen(8000, ()=> console.log("Hey man"));