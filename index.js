require('dotenv').config({path: '.env'});

const express = require('express');
const cors    = require('cors');
// const authMiddleware = require('./server/middlewares/auth.middleware');


/** Settings * */
const server = express();
server.set('port', process.env.PORT || 3002);

/** Middlewares * */
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

/** Routes * */
const transactionRouter = require('./server/routes/transactions.route');

// server.use(authMiddleware);
server.use('/_api/v1/plateEntry', transactionRouter);


server.get('/', (req, res) => { res.send("API v1.0 Connection-Mysql")});



server.listen(server.get('port'), () => {
    console.log('Express server started on port', server.get('port'));
});