const fs = require('fs'); //file system


const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/'){
        //html code when user put /
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST">');
        res.write('<p><input type="text" name="message"><br><button type="submit"/>Submit</button></p>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
        
    }
    //create file when user send request
    if (url === '/message' && method === 'POST'){
    
        const body = []; //create request body as array
    
        //on is for listen to certain event
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);//update the element into body 
        });
    
        //read all the chuck that being store in the body
        return req.on('end', () => {
            //create new buffer and add all the chunks from body into it
            const parseBody = Buffer.concat(body).toString();//to.String convert data to string
            const message = parseBody.split('=')[1];//split parseBody and split on = sign
            
            //write and update message.txt
            //avoid block the execution
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/'); 
                return res.end();
            });
            //console.log(message); //print message= because follow the name of input 
        });
        
    } 
    //set new header
    res.setHeader('Content-Type', 'text/html'); //1: default header , 2:set type
    //html code
    res.write('<html>');
    res.write('<head><title>Don Page</title></head>');
    res.write('<body>');
    res.write('<h1>This is testing website</h1>');
    res.write('<p>My name is Amir @ Don</p>');
    res.write('</body>');
    res.write('</html>');
    res.end();
    //process.exit(); quit the server
};
//module.exports.handler = requestHandler;
//module.exports.someText = 'some hard code text';

//export the module
module.exports = {
    handler: requestHandler,
    someText: 'some hard code text'
};

