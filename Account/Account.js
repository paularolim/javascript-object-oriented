// Classe abstrata - pode ser herdada mas não instanciada
export class Account {
    constructor(customer, agency) {
        if (this.constructor == Account) { throw new Error("Conta nao pode ser instanciado"); }

        this._balance = 0;
        this._customer = customer;
        this._agency = agency;
    }

    get agency() { return this._agency; }
    get balance() { return this._balance; }
    get customer() { return this._customer; }
    set customer(customer) { if (customer instanceof Customer) this._customer = customer; }

    // Metodo abstrato - deve ser sempre sobrescrito
    withdraw(value) {
        //let tax = 1;
        //this._withdraw(value, tax);
        throw new Error("Metodo abstrato");
    }

    _withdraw(value, tax) {
        if (value <= 0) console.log("Erro");
        else if (this._balance >= value) {
            this._balance -= tax * value;
            console.log("Voce sacou", value, "reais");
            console.log("Saldo atual:", this._balance);
        }
        else console.log("Saldo insuficiente");
    }

    deposit(value) {
        if (value <= 0) console.log("Erro");
        else {
            this._balance += value;
            console.log("Voce depositou", value, "reais");
            console.log("Saldo atual:", this._balance);
        }
    }

    transfer(value, account) {
        if (value <= 0) console.log("Erro");
        else {
            this.withdraw(value);
            account.deposit(value);
        }
    }
}