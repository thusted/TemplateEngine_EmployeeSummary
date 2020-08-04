// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// class Manager extends Employee {
//     constructor(name, role, email, id, officeNumber) {
//         super(name, role, email, id);
//         this.role = "Manager"
//         this.officeNumber = officeNumber;
//     };
// };

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
};

module.exports = Manager;