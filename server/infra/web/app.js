const express = require('express');
const app = express();

const apiRouter = express.Router();

require('../web/controller/user/route').addRoutes(apiRouter);
app.use('/api/v1',apiRouter);
app.get('/',(req,res)=>{
    res.json({message:"OI!!!!!!"})
})

module.exports = app;