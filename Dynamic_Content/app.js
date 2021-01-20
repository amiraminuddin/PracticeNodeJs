const path = require('path')

//import express
const express = require('express');
const bodyParser = require('body-parser');
//const expresHbs = require('express-handlebars'); //for handle bar

//create express app and store in app variable
const app = express();

/*handlebar version
//use dynamic content engine
app.engine('hbs', expresHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));

//handlebars
app.set('view engine', 'hbs')//the extension is hbs
app.set('views', 'views');
*/

/*pug version
app.set('view engine', 'pug');
app.set('views', 'views');
*/

//ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin.js');
const shopRoute = require('./routes/shop.js');

//register middleware. Parse body sent through form.
app.use(bodyParser.urlencoded( {extended: false }));
app.use(express.static(path.join(__dirname,'public')))

//will request through /admin route
app.use('/admin',adminData.routes);
app.use(shopRoute);

//adding 404 Error Page
// app.use((req, res, next) =>{
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
// });

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: 'Error'})
})

//call for start server using port 3000
app.listen(3000);

