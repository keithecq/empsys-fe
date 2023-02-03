import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetEmployeeService } from 'src/services/get-employee.service';

export class Employee {
  constructor (
    public id: string,
    public login: string,
    public name: string,
    public salary: string,

  ) {
  }
}

export class empResponse {
  constructor (
    public empList: Employee[]
  ) {}
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[];
  employeeRes: empResponse;
  displayedColumns: string[] = ['id', 'login', 'name', 'salary'];
  private httpClient: HttpClient;

  constructor(
    private empService: GetEmployeeService,
  ) {}

  getEmployees() {
    this.empService.retrieveAllEmployees().subscribe(
      (response: any) => {
        console.log(response);

        this.employeeList = response["employeeList"].map((item: any) => {
          return new Employee(item.id, item.login, item.name,item.salary);
        });
        console.log(this.employeeList);

      }
    )
  }

  ngOnInit() : void {
    this.getEmployees();
  }
}
