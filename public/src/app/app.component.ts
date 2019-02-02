import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isCheckSetupDone: boolean = false;

    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) {}

    ngOnInit() {
        if( !this.isCheckSetupDone) {
            this.checkSetup();
        }
        console.log("app.components: ngOnInit():");
        this._router.navigate(['/home']);
    }

    checkSetup() {
        let email = "admin@gmail.com";
        let observable = this._httpService.getOneUserByEmail(email);
        observable.subscribe(data => {
            if( data['result'] === "Error") {
                this.showHomeView();
            } else {
                if( data['data'].length === 0 ) {
                    let admin = {
                        email: "admin@gmail.com",
                        firstname: "Admin",
                        lastname: "Andy",
                        city: "Seattle",
                        state: "WA",
                        country: "USA",
                        isactive: true,
                        isadministrator: true,
                        password: "123"
                    }
                    let observable = this._httpService.createUserLogin(admin);
                    observable.subscribe(data => {
                        if( data['result'] === "Error") {
                            console.log("checkSetup(): Error adding Administrator", data);
                        }
                        this.showHomeView();
                    });
                }
            }
        });
        this.isCheckSetupDone = true;
    }

    showHomeView() {
        this._router.navigate(['/home']);
    }
}
