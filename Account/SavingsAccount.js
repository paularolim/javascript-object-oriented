import { Account } from "./Account.js";

export class SavingsAccount extends Account {
    constructor(customer, agency) {
        super(customer, agency);
    }

    withdraw(value) {
        let tax = 1.02;
        this._withdraw(value, tax);
    }
}