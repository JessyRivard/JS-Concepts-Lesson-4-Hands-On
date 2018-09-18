class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }
//The following methods should console.log the specified sentences:
//jobDescription() should console.log a sentence that provides the person's name, hire date, salary and their job description
//yearsExperience() should console.log a sentence that provides the person's name, hire date, salary and their years of experience
//degreeCompleted() should console.log a sentence that provides the person's name, hire date, salary and the degree they have completed
//Use the this keyword within the console.logs
class Manager extends Employee {
    constructor(descriptionOfJob, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes " + this.salary + ". They " + this.descriptionOfJob + ".");
    }
}
class Designer extends Employee {
    constructor(experience, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.experience = experience;
    }
    yearsExperience() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes " + this.salary + ". They have " + this.experience + " years of experience.");
    }
}
class SalesAssociate extends Employee {
    constructor(degree, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.degree = degree;
    }
    degreeCompleted() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes " + this.salary + ". They have a " + this.degree + " degree.");
    }
}
//Create one new instance of each subclass (three instances total) to define the parameters located within the constructors.
//This is where the console.logs within the methods will be given actual information to console.log
//Each new instance should include a name, a hire date, and a salary along with the appropriate last parameter (descriptionOfJob, experience, or degree)
//An example of the end result would be "Donna was hired on 3/22/17 and makes 80000 because she manages the sales staff"
const Mary = new Manager("manage the Sales staff", "Mary", 75000, "4/7/2008");
Mary.jobDescription();
const Margaret = new Designer(5, "Margaret", 52000, "9/13/2015");
Margaret.yearsExperience();
const David = new SalesAssociate("marketing", "David", 30000, "2/3/2013");
David.degreeCompleted();
