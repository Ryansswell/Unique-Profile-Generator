// test('employee smoke test', () => {});

const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("initialization", () => {
        it("needs a name", () => {

        const name = "Nick",
        const id = 1;
        const email = "nick@email.com"
        const emp = new Employee(name);
        
        expect(emp.name).toBe(name);
        expect(emp.id).toBe(id);
        expect(emp.email).toBe(email);
        

        });
    });

    describe("getName()", () => {
        it("needs a name", () => {
            
        const name = "Sam";
        const emp = new Employee(name, 1, "sam@email.com");
        const actual = emp.getName();
        expect(actual).toBe(name);
    });


// group for getName()
    // describe.todo("getName()");

// group for getId()


// group for getEmail()

// group for getRole()—returns 'Employee'


});