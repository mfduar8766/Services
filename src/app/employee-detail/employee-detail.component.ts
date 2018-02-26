import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';


@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  

  constructor(private employeeServ: EmployeeServiceService) { }

  ngOnInit() {
    this.employees = this.employeeServ.getEmployees();
  }

}
