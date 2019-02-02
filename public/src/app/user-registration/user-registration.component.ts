import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-registration',
    templateUrl: './user-registration.component.html',
    styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
    userRegistration: any = { email: "", firstname: "", lastname: "", password: "", confirmpassword: ""};
    userRegistrationError: string = "";
    newUserLogin: any;

    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    ngOnInit() {
    }

    // OnClick functions
    onClickRegister() {
        this.userRegistrationError = "";
        if( this.userRegistration.password !== this.userRegistration.confirmpassword) {
            this.updateUserRegistrationError("Password and Confirm Password are required and must be the same.");
        } else {
            this.newUserLogin = {
                email: this.userRegistration.email,
                firstname: this.userRegistration.firstname,
                lastname: this.userRegistration.lastname,
                password: this.userRegistration.password
            };
            let observable = this._httpService.createUserLogin(this.newUserLogin);
            observable.subscribe(data => {
                if( data['result'] === "Error") {
                    console.log("Error:", data);
                    if( data['error']['errors']) {
                        if( data['error']['errors']['email']) {
                            this.updateUserRegistrationError(data['error']['errors']['email']['message']);
                        }
                        if( data['error']['errors']['firstname']) {
                            this.updateUserRegistrationError(data['error']['errors']['firstname']['message']);
                        }
                        if( data['error']['errors']['lastname']) {
                            this.updateUserRegistrationError(data['error']['errors']['lastname']['message']);
                        }
                    } else if( data['error']['message']) {
                        this.updateUserRegistrationError(data['error']['message']);
                    }
                } else {
                    console.log('Registered:', data);
                    let newUser = {
                        userid: data['data']._id,
                        email: data['data'].email,
                        firstname: data['data'].firstname,
                        lastname: data['data'].lastname,
                        city: data['data'].city,
                        state: data['data'].state,
                        country: data['data'].country,
                        isactive: true,
                        isadministrator: false
                    }
                    this._httpService.saveLoginToSession(newUser);
                    this._router.navigate(['/home']);
                }
            });
        }
    }

    // Shared functions
    updateUserRegistrationError(message: string) {
        if (this.userRegistrationError.length === 0) {
            this.userRegistrationError = message;
        } else {
            this.userRegistrationError += "  " + message;
        }
    }
}
