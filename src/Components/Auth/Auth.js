class Auth {
    token=localStorage.getItem("x-auth-token")
    loginStatus=localStorage.getItem("ProfessoryloggedIn")
    constructor(){
        this.authenticated = this.token?true:false;
        this.Login=this.loginStatus
    }

    login=()=>{
        this.authenticated=true;
        this.Login=true;
    }

    logout=()=>{
        this.authenticated=false;
        this.Login=false;
    }

    isAuthenticated(){
        return this.authenticated;
    }

    isLoggedIn(){
        return this.Login;
    }
}

export default new Auth();