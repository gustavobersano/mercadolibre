var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var apiRouter = require('./routes/api-items');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/mercado-libre-buscador')));
app.use('/', express.static(path.join(__dirname, 'dist/mercado-libre-buscador')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    console.log('Error Handler');
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.status);
});

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Connet with MondoDB

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:1357924680@mercado-libre-buscador-rev4d.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(
    () => {
        const col = client.db(_DBNAME).collection('item');
        col.find({}).toArray(function (err, items) {
            console.log(items);
        });

        console.log('connection successful')
    },
    (err) => {
        console.log(err)
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    });
*/
const dbname = "mercado-libre-buscador";
const mongoose = require('mongoose');
const connDB = "mongodb+srv://user:1357924680@mercado-libre-buscador-rev4d.mongodb.net/test";
mongoose.connect(connDB, {
    dbName: dbname,
    useNewUrlParser: true,
    promiseLibrary: require('bluebird')
})
    .then(() => {
        console.log('connection successful');
    })
    .catch((err) => console.error(err));
module.exports = app;