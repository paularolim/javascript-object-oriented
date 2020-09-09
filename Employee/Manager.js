import { Employee } from "./Employee.js";

export class Manager extends Employee {
    constructor (name, cpf, salary){
        super(name, cpf, salary);
        this._bonus = 1.1;
    }
}