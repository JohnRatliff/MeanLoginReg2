import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
    userView: any = {
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
    userViewId: string;

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.userViewId = params['id'];
            this.getUser();
        });
    }

    // Shared functions
    getUser() {
        let observable = this._httpService.getOneUserById(this.userViewId);
        observable.subscribe(data => {
            if( data['result'] === "Error") {
                this.showHomeView();
            } else {
                this.userView = {
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
}
