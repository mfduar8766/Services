import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeServiceService {

  constructor() { }

  getEmployees() {

    return [
      {id: 1, name: 'John', age: 38},
      {id: 2, name: 'Abby', age: 24},
      {id: 3, name: 'Zack', age: 30},
      {id: 4, name: 'Sussey', age: 21},
      {id: 5, name: 'Ashley', age: 35}    
    ];
  };

}
