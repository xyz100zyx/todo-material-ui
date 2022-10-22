import $api from '../http';

class AuthService{
    static async register(email, password, name){
        return await $api.post('/auth/register', {email, password, name});
    }

    static async login(email, password){
        return await $api.post('auth/login', {email, password});
    }
}

export default AuthService;