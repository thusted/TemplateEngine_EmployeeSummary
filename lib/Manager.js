// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, role, email, id, officeNumber) {
        super(name, role, email, id);
        this.officeNumber = officeNumber;
    };
};

module.exports = Manager;