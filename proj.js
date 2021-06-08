const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader("Content-Type", "text/html")
        res.write("<html>");
        res.write("<head><title>Proj</title></head>");
        res.write("<body> <form action='/create-user' method='POST'> <input type='text' name='user'>  <button type='submit'>Submit</button></form> </body>");
        res.write("</html>");
        return res.end();
    }


    if (url === '/users') {
        res.setHeader("Content-Type", "text/html")
        res.write("<html>");
        res.write("<head><title>Proj 2</title></head>");
        res.write("<body><ul> <li>User 1</li>  <li>User 2</li> <li>User 3</li> </ul></body>");
        res.write("</html>");
        res.end();
    }

    if (url === "/create-user" && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseUser = Buffer.concat(body).toString();
            const myUser = parseUser.split('=')[1];
            console.log(myUser);
            res.setHeader('location', '/');
            res.end();
        });

    }


});

server.listen(3000);