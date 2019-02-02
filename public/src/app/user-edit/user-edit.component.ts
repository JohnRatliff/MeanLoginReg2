import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
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
    userEditId: string;
    isOkToEditIsActive: boolean = false;
    isOkToEditIsAdministrator: boolean = false;

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.userEditId = params['id'];
            this.isOkToEditIsActive = (this._httpService.userIsAdministrator && this._httpService.userId != this.userEditId);
            this.isOkToEditIsAdministrator = (this._httpService.userIsAdministrator && this._httpService.userId != this.userEditId)
        });
        this.getUser();
    }

    // OnClick Functions
    onClickUpdateUser() {
        let observable = this._httpService.updateUser(this.userEditId, this.userEdit);
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
                this._router.navigate(['/user-list']);
            }
        });
    }

    // Shared functions
    getUser() {
        let observable = this._httpService.getOneUserById(this.userEditId);
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
