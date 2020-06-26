const repositoryBuilder = require('../../../../app/domain/user/repository');
const serviceBuilder = require('../../../../app/domain/user/service');
const useCaseBuilder = require('../../../../app/usecase/user/login');
const controllerBuilder = require('./controller');

const users = [
    {
        id:1,
        name:'João da Silva',
        email:'joao@teste.com.br',
        password:'123456',
        roles:['ADM']
    }
]

const repository = repositoryBuilder.build({users});
const service = serviceBuilder.build(repository);
const loginUseCase = useCaseBuilder.build(service);

const controller = controllerBuilder.build(loginUseCase);

module.exports = {
    controller
}
