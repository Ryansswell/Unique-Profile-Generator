const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("initialization", () => {
        it("needs a name", () => {

            const name = "Nick";
            const id = "1";
            const email = "nick@email.com";
            const emp = new Employee(name, id, email);

            expect(emp.name).toBe(name);
            expect(emp.id).toBe(id);
            expect(emp.email).toBe(email);
        });
    });

    describe("getName()", () => {
        it("needs a name", () => {

            const name = "Tom Jones";
            const emp = new Employee(name, 168946, "TJ@email.com");
            const actual = emp.getName();
            expect(actual).toBe(name);

        });
    });

    // describe("getid()", () => {
    //     it("needs an ID", () => {

    //         const id = "168946";
    //         const emp = new Employee("sam", 168946, "sam@email.com");
    //         const actual = emp.getId();
    //         expect(actual).toBe(id);

    //     });
    // });

    // describe("getEmail()", () => {
    //     it("needs a name", () => {

    //         const email = "sam@email.com";
    //         const emp = new Employee("name", 168946, "sam@email.com");
    //         const actual = emp.getEmail();
    //         expect(actual).toBe(email);

    //     });
    // });


    // describe("getRole()", () => {
    //     it("returns employee", () => {

    //         const name = "Sam";
    //         const emp = new Employee(name, 168946, "sam@email.com");
    //         const actual = emp.getRole();
    //         expect(actual).toBe("Employee");


    //         // return (Employee);
    //     });
    // });
});

