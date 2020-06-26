class ProductRepository{
    constructor(params){
        params = params || {}
        this.products = params.products || []
        this.findById = this.findById.bind(this);
        this.findAll = this.findAll.bind(this);
        this.findByName = this.findByName.bind(this);
    }

    async findById(id){
        const product = this.products.find((product)=>product.id == id);
        return Promise.resolve(product);
    }
    async findAll(){
        return Promise.resolve([...this.products]);
    }
    async findByName(name){
        name = name || "";
        const expression = new RegExp(name.toLowerCase())
        const products = this.products.filter((product)=>expression.test(product.name.toLowerCase()));
        return Promise.resolve(products);
    }
}

const build = (params)=>{
    return new ProductRepository(params);
}

module.exports = {
    build
}