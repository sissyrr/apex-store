class Product{
    constructor(params){
        params = params || {}
        this.id = params.id || null;
        this.name = params.name || null;
        this.description = params.description || null;
        this.price = params.price || null;
        this.image = params.image || null;
    }
}

module.exports = Product;