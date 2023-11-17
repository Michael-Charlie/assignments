const employees = [];

function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.empStatus = "Full Time"
    this.printEmployeeForm = function(){
        console.log(this)
    }
}


let emp1 = new Employee("Michael", "Professional Procrastinator", "$0/hour")
emp1.empStatus = "Part Time"

let emp2 = new Employee("Charlie", "Professional Motivator", "$3000/hour")

emp1.printEmployeeForm()
emp2.printEmployeeForm()
employees.push(emp1)
employees.push(emp2)

console.log(employees)