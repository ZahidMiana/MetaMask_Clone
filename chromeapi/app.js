const express = require('express');
const cors = require('cors');


const userRouter = require('./Api/Routers/userRouter');
const accountRouter = require('./Api/Routers/accountRouter');
const tokenRouter = require('./Api/Routers/tokenRouter');

const app = express();


app.use(express.json({ limit: '100kb' }));
app.use(cors());
app.options('*', cors());


//Routers
app.use('/api/v1/user', userRouter);
app.use('/api/v1/account', accountRouter);
app.use('/api/v1/tokens', tokenRouter);

module.exports = app;