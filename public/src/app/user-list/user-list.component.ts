import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: any = [];

    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.getAllUsers();
    }

    // Common Functions
    onClickDeleteUser(id: string) {
        if( confirm("Are you sure you want to permanently delete this user?")) {
            let observable = this._httpService.deleteUserById(id);
            observable.subscribe(data => {
                this.removeUser( id);
                //this._router.navigate(['/user-list']);
                //this.getAllUsers();
            });
        }
    }

    removeUser(id: string) {
        let i: number = this.users.findIndex(x => x._id === id);
        console.log("removeUser(): ", this.users[i]);
        this.users.splice(i, 1);
    }

    getAllUsers() {
        let observable = this._httpService.getAllUsers();
        observable.subscribe(data => {
            this.users = data["data"];
        });
    }

}
