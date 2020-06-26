class UserService{
    constructor(repository){
        this.repository = repository;
        this.findByEmail = this.findByEmail.bind(this);
    }

    async findByEmail(email){
        return this.repository.findByEmail(email);
    }
}

const build = (repository)=>{
    return new UserService(repository);
}

module.exports = {
    build
}