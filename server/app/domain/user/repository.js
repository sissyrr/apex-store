class UserRepository{
    constructor(params){
        params = params || {}
        this.users = params.users || []
        this.findByEmail = this.findByEmail.bind(this);
    }

    async findByEmail(email){
        const user = this.users.find((user)=>user.email === email);
        return Promise.resolve(user);
    }
}

const build = (params)=>{
    return new UserRepository(params);
}

module.exports = {
    build
}