import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;

  loaded: boolean = false;



  constructor() { 
    
    console.log('BRINGING IN SERVICES AND INJECTIONS')

  }
  ngOnInit(): void {


      this.users = [
        {
          firstName : 'Manu',
          lastName :'Arora',
          age: 23,
          address: {
              street: 'Sikar Road',
              city: 'Boston',
              state: 'Raj'
          }
        },
        {
          firstName : 'Kevin',
          lastName :'Spacy',
          age: 44,
          address: {
              street: 'Hyd Road',
              city: 'Hyd',
              state: 'Telangana'
          }
        },
        {
          firstName : 'Arya',
          lastName :'Tomar',
          age: 12,
          address: {
              street: 'Meerut Road',
              city: 'Meerut',
              state: 'UP'
          }
        },
    ];
    this.loaded = true;
    
    this.addUser(
      {
        firstName : 'David',
        lastName :'Baliyan',
      }
    )
  
  }

  addUser(user: User) {
    this.users?.push(user);
  }

}
