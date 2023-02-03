import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/components/employee/employee.component';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeeService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllEmployees() {
    return this.http.get<Employee[]>(`http://localhost:8080/employees`);
  }

  // uploadCSVFile(file) {
  //   const uploadedFile = new FormData();
  //   uploadedFile.append( 'file', new Blob([file], { type: 'text/csv' }), file.name);
  //   const url = `MyURL`;
  //   return this.http.post(url, uploadedFile);
  // }
}

