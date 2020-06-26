class ProductService{
    constructor(repository){
        this.repository = repository;
        this.findById = this.findById.bind(this);
        this.findByName = this.findByName.bind(this);
        this.findAll = this.findAll.bind(this);
    }

    async findById(id){
        return this.repository.findById(id);
    }
    async findByName(name){
        return this.repository.findByName(name);
    }
    async findAll(){
        return this.repository.findAll();
    }
}

const build = (repository)=>{
    return new ProductService(repository);
}

module.exports = {
    build
}