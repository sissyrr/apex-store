const controller = require('./index').controller;

const addRoutes =(router)=>{
    console.log('add rota ok')
    router.post('/authenticate',controller.authenticate);
}

module.exports = {
    addRoutes
}