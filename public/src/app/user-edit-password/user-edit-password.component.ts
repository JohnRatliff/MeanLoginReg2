import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-edit-password',
    templateUrl: './user-edit-password.component.html',
    styleUrls: ['./user-edit-password.component.css']
})
export class UserEditPasswordComponent implements OnInit {
    editPassword: any = { userid: "", useremail: "", oldpassword: "", newpassword: "" };
    editPasswordError: string = "";

    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.editPassword.userid = this._httpService.userId;
        this.editPassword.useremail = this._httpService.userEmail;
    }

    // OnClick functions
    onClickEditPassword() {
        //console.log("onClickEditPassword()", this.editPassword);
        let observable = this._httpService.updateUserPassword(this.editPassword.userid, this.editPassword);
        observable.subscribe(data => {
            if( data['result'] === "Error") {
                console.log("onClickEditPassword()", data);
                this.editPasswordError = "";
                if( data['error']['message']) {
                    this.updateEditPasswordError(data['error']['message']);
                }
            } else {
                this._router.navigate(['']);
            }
        });
    }

    // Shared functions
    updateEditPasswordError(message: string) {
        if (this.editPasswordError.length === 0) {
            this.editPasswordError = message;
        } else {
            this.editPasswordError += "  " + message;
        }
    }
}
