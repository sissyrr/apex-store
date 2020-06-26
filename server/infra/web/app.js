const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
const apiRouter = express.Router();

require('../web/controller/user/route').addRoutes(apiRouter);
app.use('/api/v1',apiRouter);
app.get('/',(req,res)=>{
    res.json({message:"OI!!!!!!"})
})

module.exports = app;