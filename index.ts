// Import stylesheets
import './style.css';

//This abstract class is only for inheritance purposes. It can be instansiated.
abstract class Department {
  static fiscalYear = 2023;
  protected employees : string[] = [];
  constructor(protected readonly id: string, public name: string) {
  }

  static createEmployee(name: string) {
    return {name: name};
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




class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log('IT Department - ID: '+ this.id);
  }
}


class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found!');
  }

  set mostRecentReport(value: string) {
    if (!value){ throw new Error('Please pass a valid value!'); }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Acconting');
    this.lastReport = reports[0];
  }

  //override method
  describe() {
    console.log('Accounting department - ID: ' + this.id);
  }

  //override method
  addEmployee(name: string) {
    if (name === 'Max') { return; }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Dion');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Year end report.';
accounting.addReport('Something went wrong..');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Manu');
accounting.describe();

//accounting.printReports();
//console.log(accounting);