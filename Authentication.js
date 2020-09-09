// Ser autenticavel (authentic) significa ter o metodo canAuthenticate - polimorfismo
export class Authentication {
    static login(authentic, password) {
        if (Authentication.isAuthentic(authentic))
            return authentic.canAuthenticate(password);
        return false;
    }

    static isAuthentic(authentic) {
        return "canAuthenticate" in authentic && authentic.canAuthenticate instanceof Function;
    }
}