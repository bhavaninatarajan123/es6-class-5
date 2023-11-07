// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary.
//  Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class 
//and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers.
//  Create two instances of the 'Manager' class and calculate their annual salary.

class   Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
        
    }
    display(){
            let x=(this.salary *12)
        console.log(`I am ${this.name},my salary per month is ${this.salary},my annual salary is  ${x}`);
    }
}
let a=new Employee("john",25000);
let b=new Employee("anna",15000);
a.display();
b.display();

class Manager extends Employee{
    constructor(name,salary,department,bonus){
        super(name,salary);
            this.department=department;
            this.bonus=bonus;
        
    }
    display(){
        
        let y =(this.salary +this.bonus)
            console.log(`I am ${this.name},my salary per month is ${this.salary},my department is ${this.department} and my bonus is${this.bonus},finally my sallary with bonus is ${y}` );
    }
    
    }

let c=new Manager("john",25000,"developer",1500);
let d=new Manager("anna",15000,"tester",1000);
c.display();
d.display();

    
