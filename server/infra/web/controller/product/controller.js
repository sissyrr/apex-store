const Product = require("../../../../app/domain/product/entity");

class ProductController{
    constructor(params){
        params = params || {}
        this.findAllUseCase = params.findAllUseCase;
        this.findByIdUseCase = params.findByIdUseCase;
        this.findByNameUseCase = params.findByNameUseCase;
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        
    }

    async findAll(req,res){
        const {name} = req.query;
        if(name){
            const presenter = await this.findByNameUseCase.execute({name})
            if(presenter){
                return res.json(presenter);
            }else{
             return res.sendStatus(404)   
            }
        } else{
            const presenter = await this.findAllUseCase.execute()
            return res.json(presenter);  
        }
       
    }
    async findById(req,res){
        const id = req.params.id;
        const presenter = await this.findByIdUseCase.execute({id})
        if(presenter){
            return res.json(presenter);
        }else{
         return res.sendStatus(404)   
        }
    }
}

const build = (useCase)=>{
    return new ProductController(useCase);
}

module.exports = {
    build
}