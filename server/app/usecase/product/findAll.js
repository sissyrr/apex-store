class FindAllUseCase {
    constructor(service){
        this.service = service;
        this.execute = this.execute.bind(this);
    }

    async execute(params){
        const products  = await this.service.findAll() || [];
        return products;
    }
}

const build = (service)=>{
    return new FindAllUseCase(service);
}

module.exports = {
    build
}