import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'

@Component ({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']

})

export class UserComponent implements OnInit {
    // Properties
    user: User;

    // Methods
    constructor() {
        
    }
    ngOnInit(): void {
        this.user = {
            firstName : 'Manu',
            lastName :'Arora',
            age: 23,
            address: {
                street: 'Sikar Road',
                city: 'Boston',
                state: 'Raj'
            }
        }
    }

}

