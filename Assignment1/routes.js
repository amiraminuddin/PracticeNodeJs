const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url == '/'){

        res.setHeader('Content-Type', 'text/html'); 
        //create html
        res.write('<html>');
        res.write('<head>');
        res.write('<title>UsernameTest</title>');
        res.write('</head>');
        res.write('<body><form action="/createUser" method="POST">');
        res.write(
        '<p>username: <input type="text" name="username" /><button type="submit">Send</button></p>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

    }

    if (url == '/users'){

        res.setHeader('Content-Type', 'text/html'); 
        //html code
        res.write('<html>');
        res.write('<head><title>Don Page</title></head>');
        res.write('<body>');
        res.write('<h1>This is testing website</h1>');
        res.write('<p>My name is Amir @ Don</p>');
        res.write('<ul><li>User1</li><li>User2</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

    }

    if (url === '/createUser' && method === 'POST'){

        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const username = parseBody.split('=')[1];  
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();          
        });
        
    }
};

module.exports.handler = requestHandler;