import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
    userLogin: any = { email: "", password: "" };
    userLoginError: string = "";

    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    ngOnInit() {
    }

    // OnClick functions
    onClickLogin() {
        let observable = this._httpService.userLogin(this.userLogin);
        observable.subscribe(data => {
            if( data['result'] === "Error") {
                this.userLoginError = "";
                if( data['error']['message']) {
                    this.updateUserLoginError(data['error']['message']);
                }
            } else {
                this._httpService.saveLoginToSession(data['data']);
                this._router.navigate(['']);
            }
        });
    }

    // Shared functions
    updateUserLoginError(message: string) {
        if (this.userLoginError.length === 0) {
            this.userLoginError = message;
        } else {
            this.userLoginError += "  " + message;
        }
    }
}
