class User{
    constructor(params){
        this.id = params.id || null;
        this.name = params.name || null;
        this.email = params.email ||null;
        this.password = params.password || null;
        this.roles = params.roles ? params.roles : []
    }
}

module.exports = User;