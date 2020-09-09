// IMPORTS
import { Customer } from "./Customer.js";
import { CurrentAccount } from "./Account/CurrentAccount.js";
import { SavingsAccount } from "./Account/SavingsAccount.js";
import { SalaryAccount } from "./Account/SalaryAccount.js";
import { Manager } from "./Employee/Manager.js";
import { Director } from "./Employee/Director.js";
import { Authentication } from "./Authentication.js";

// EMPLOYEES
const manager = new Manager("Rodrigo", 12345, 4000);
const director = new Director("Rafael", 65456, 8000);

// CUSTOMERS
const customer1 = new Customer("Ricardo", 12345, "abc123");
const customer2 = new Customer("Alice", 54321, "abc123");
const customer3 = new Customer("Manu", 65432, "abc123");

// EMPLOYEES METHODS
manager.configPassword("abcabcabc");
director.configPassword("abcdefg");

// AUTHENTICATION SYSTEM - EMPLOYEES
const loggedManager = Authentication.login(manager, "abcabcabc");
const loggedDirector = Authentication.login(director, "abcdefg");
const loggedCustomer1 = Authentication.login(customer1, "abc123");

// ACCOUNTS
const currentAccount = new CurrentAccount(customer1, 1234);
const savingsAccount = new SavingsAccount(customer2, 5678);
const salaryAccount = new SalaryAccount(customer3);

// ACCOUNTS METHODS - DESPOSITS
console.log("\n--- Depositos ---");
currentAccount.deposit(200);
savingsAccount.deposit(1000);
salaryAccount.deposit(400);

// ACCOUNTS METHODS - WITHDRAWS
console.log("\n--- Saques ---");
currentAccount.withdraw(10);
savingsAccount.withdraw(10);
salaryAccount.withdraw(10);

// CONSOLES
console.log("\n");
console.log(currentAccount);
console.log(savingsAccount);
console.log(salaryAccount);
console.log("\n");
console.log(loggedManager);
console.log(loggedDirector);
console.log(loggedCustomer1);