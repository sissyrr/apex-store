const User = require("../../../../app/domain/user/entity");

class UserController{
    constructor(useCase){
        this.useCase = useCase;
        this.authenticate = this.authenticate.bind(this);
    }

    async authenticate(req,res){
        const {credentials} = req.body;
        console.log(credentials)
        const presenter = await this.useCase.execute({credentials})
        return res.json(presenter);
    }
}

const build = (useCase)=>{
    return new UserController(useCase);
}

module.exports = {
    build
}