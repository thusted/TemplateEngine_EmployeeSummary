// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, role, email, id, github) {
        super(name, role, email, id);
        this.github = github;
    };
};

module.exports = Engineer;