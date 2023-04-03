// Import stylesheets
import './style.css';

class Department {
  private employees : string[] = [];
  constructor(private readonly id: string, public name: string) {
  }

  describe() {}

  addEmployee() {}
}

class ITDepartment extends Department {}
