export class Customer {
    constructor(name, cpf, password) {
        this._name = name;
        this._cpf = cpf;
        this._password = password;
    }

    get name() { return this._name; }
    get cpf() { return this._cpf; }

    set name(name) { this._name = name; }

    // canAuthenticate(password) {
    //     return this._password == password;
    // }
}