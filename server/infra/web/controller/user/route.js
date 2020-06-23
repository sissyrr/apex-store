const controller = require('./index').controller;

const addRoutes =(router)=>{
    router.post('/authenticate',controller.authenticate);
}

module.exports = {
    addRoutes
}