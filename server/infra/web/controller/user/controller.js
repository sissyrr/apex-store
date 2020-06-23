const User = require("../../../../app/domain/user/entity");

class UserController{
    constructor(useCase){
        this.useCase = useCase;
    }

    async authenticate(req,res){

    }
}

const build = (useCase)=>{
    return new UserController(useCase);
}

module.exports = {
    build
}