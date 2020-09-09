import { Employee } from "./Employee.js";

export class Director extends Employee {
    constructor(name, cpf, salary) {
        super(name, cpf, salary);
        this._bonus = 2;
    }
}