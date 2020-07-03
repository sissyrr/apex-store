const repositoryBuilder = require('../../../../app/domain/product/repository');
const serviceBuilder = require('../../../../app/domain/product/service');
const findAllUseCaseBuilder = require('../../../../app/usecase/product/findAll');
const findByIdUseCaseBuilder = require('../../../../app/usecase/product/findById');
const findByNameUseCaseBuilder = require('../../../../app/usecase/product/findByName');
const controllerBuilder = require('./controller');

const products = [
    {
        id:1,
        name:'Produto 1',
        description:'joao@teste.com.br',
        price:10.0,
        image:'teste.png'
    },

    {
        id:2,
        name:'Produto 2',
        description:'joao@teste.com.br',
        price:10.0,
        image:'teste.png'
    },

    {
        id:3,
        name:'Produto 3',
        description:'joao@teste.com.br',
        price:10.0,
        image:'teste.png'
    }
]

const repository = repositoryBuilder.build({products});
const service = serviceBuilder.build(repository);
const findAllUseCase = findAllUseCaseBuilder.build(service);
const findByIdUseCase = findByIdUseCaseBuilder.build(service);
const findByNameUseCase = findByNameUseCaseBuilder.build(service);

const params = {
    findAllUseCase,
    findByIdUseCase,
    findByNameUseCase
}

const controller = controllerBuilder.build(params);

module.exports = {
    controller
}
