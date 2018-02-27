import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];


  constructor(private employeeServ: EmployeeServiceService) { }

  ngOnInit() {
     this.employeeServ.getEmployees().subscribe(data => this.employees = data);
  }

}
