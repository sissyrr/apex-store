const controller = require('./index').controller;

const addRoutes =(router)=>{
    router.get('/products',controller.findAll);
    router.get('/products/:id',controller.findById);
}

module.exports = {
    addRoutes
}