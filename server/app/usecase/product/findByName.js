class FindByNameUseCase {
    constructor(service){
        this.service = service;
        this.execute = this.execute.bind(this);
    }

    async execute(params){
        const {name} = params;
        const products  = await this.service.findByName(name);
        return products;
    }
}

const build = (service)=>{
    return new FindByNameUseCase(service);
}

module.exports = {
    build
}