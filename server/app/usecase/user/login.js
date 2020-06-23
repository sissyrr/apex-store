class LoginUseCase {
    constructor(service){
        this.service = service;
    }

    async execute(params){
        const {credentials} = params;
        const user  = await this.service.findByEmail(credentials.email);
        if(user && user.password == credentials.password){
            return {
                name:user.name,
                email:user.email,
                roles:user.roles
            };
        }
        return null;
    }
}

const build = (service)=>{
    return new LoginUseCase(service);
}

module.exports = {
    build
}