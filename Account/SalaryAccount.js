import { Account } from "./Account.js";

export class SalaryAccount extends Account {
    constructor(customer) {
        super(customer);
    }

    withdraw(value) {
        let tax = 1.01;
        return this._withdraw(value, tax);
    }
}