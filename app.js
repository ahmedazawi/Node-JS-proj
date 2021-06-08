// const http = require('http');
// const route = require('./routes');      // when import from route.js
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorController = require('./controllers/error');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');  // import ejs 
app.set('views', 'views');    // Adding ejs to html files

app.use(express.static(path.join(__dirname, 'public')));  // will access user on public folder

app.use(adminRouter);
app.use(shopRouter);

// with controller

app.use(errorController.get404Page);


// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', 'err.html'));
// });



// without controller 

// app.use((req, res, next) => {
//     res.status(404).render('err', { title: 'Page not found' });
// });







// pure node js
// const server = http.createServer(app) // const server = http.createServer(route);  // when import from route.js
// server.listen(3000);
app.listen(3000);
