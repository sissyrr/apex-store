class FindByIdUseCase {
    constructor(service){
        this.service = service;
        this.execute = this.execute.bind(this);
    }

    async execute(params){
        const {id} = params;
        const product  = await this.service.findById(id);
        return product;
    }
}

const build = (service)=>{
    return new FindByIdUseCase(service);
}

module.exports = {
    build
}