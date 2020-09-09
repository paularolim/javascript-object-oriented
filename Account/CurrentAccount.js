import { Account } from "./Account.js";

export class CurrentAccount extends Account {
    static numberAccount = 0;

    constructor(customer, agency) {
        super(customer, agency);
        CurrentAccount.numberAccount++;
    }

    // Sobreescrevendo o metodo da conta
    withdraw(value){
        let tax = 1.1;
        this._withdraw(value, tax);
    }
}