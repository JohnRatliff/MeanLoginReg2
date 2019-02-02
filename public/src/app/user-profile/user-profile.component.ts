import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    userEditError: string;
    userEdit: any = {
        userid: "",
        email: "",
        firstname: "", 
        lastname: "", 
        city: "", 
        state: "", 
        country: "", 
        isactive: false, 
        isadministrator: false 
    };

    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.getUser();
    }

    // OnClick Functions
    onClickUpdateUser() {
        let user = this.userEdit;
        this.getUser();
        user.userid = localStorage.getItem('userid');
        user.email  = this.userEdit.email;
        user.isactive = this.userEdit.isactive;
        user.isadministrator = this.userEdit.isadministrator
        let observable = this._httpService.updateUser(user.userid, user);
        observable.subscribe(data => {
            if( data['result'] === "Error") {
                this.userEditError = "";
                if( data['error']['errors']) {
                    if( data['error']['errors']['email']) {
                        this.updateUserEditError(data['error']['errors']['email']['message']);
                    }
                    if( data['error']['errors']['firstname']) {
                        this.updateUserEditError(data['error']['errors']['firstname']['message']);
                    }
                    if( data['error']['errors']['lastname']) {
                        this.updateUserEditError(data['error']['errors']['lastname']['message']);
                    }
                } else if( data['error']['message']) {
                    this.updateUserEditError(data['error']['message']);
                }
            } else {
                this._httpService.saveLoginToSession(data['data']);
                this._router.navigate(['/home']);
            }
        });
    }

    // Shared functions
    getUser() {
        let userid = localStorage.getItem('userid');
        let observable = this._httpService.getOneUserById(userid);
        observable.subscribe(data => {
            if( data['result'] === "Error") {
                this.showHomeView();
            } else {
                this.userEdit = {
                    email: data['data'].email,
                    firstname: data['data'].firstname,
                    lastname: data['data'].lastname,
                    city: data['data'].city,
                    state: data['data'].state,
                    country: data['data'].country,
                    isactive: data['data'].isactive,
                    isadministrator: data['data'].isadministrator,
                }
            }
        });
    }

    showHomeView() {
        this._router.navigate(['/home']);
    } 

    updateUserEditError(message: string) {
        if (this.userEditError.length === 0) {
            this.userEditError = message;
        } else {
            this.userEditError += "  " + message;
        }
    }

}
