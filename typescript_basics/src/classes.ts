abstract class Department {
  protected readonly id: string; //protected attributes can be used in child classses
  public name: string;

  private employees: string[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class DepartmentSimplified {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: DepartmentSimplified) {
    console.log(`DepartmentSimplified: ${this.id} -  ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// const department1 = new Department("1", "Sales");
// department1.describe();

// department1.addEmployee("Federico");
// department1.addEmployee("Pepe");

// department1.printEmployeeInformation();

class ItDepartment extends Department {
  static maxNumberOfEmployees = 200;

  constructor(id: string, public admins: string[], private _reports: string[]) {
    super(id, "IT");
  }

  get reports() {
    return this._reports;
  }
  set reports(reports: string[]) {
    this._reports = reports;
  }

  describe(this: ItDepartment): void {
    console.log("This is an IT Department: " + this.id + " - " + this.name);
  }

  static createITReport(description: string) {
    return "some It report " + description;
  }
}

const someItDepartment = new ItDepartment("123", [], []);
someItDepartment.describe();

console.log(`Reports =${someItDepartment.reports}`);
console.log(ItDepartment.createITReport("asd asd"));
