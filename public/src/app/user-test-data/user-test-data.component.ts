import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-test-data',
    templateUrl: './user-test-data.component.html',
    styleUrls: ['./user-test-data.component.css']
})
export class UserTestDataComponent implements OnInit {

    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.generateUserLogins();
        this._router.navigate(['/user-list']);
    }

    generateUserLogins() {
        let newLogins: any = [];
        let newLogin: any;

        // aa@gmail.com
        newLogin = {
            email: "aa@gmail.com",
            firstname: "Ann",
            lastname: "Andrews",
            city: "Atlanta",
            state: "GE",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // bb@gmail.com
        newLogin = {
            email: "bb@gmail.com",
            firstname: "Bob",
            lastname: "Bolson",
            city: "Boston",
            state: "MA",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // cc@gmail.com
        newLogin = {
            email: "cc@gmail.com",
            firstname: "Cari",
            lastname: "Candy",
            city: "Chicago",
            state: "IL",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // dd@gmail.com
        newLogin = {
            email: "dd@gmail.com",
            firstname: "Dan",
            lastname: "Donaldson",
            city: "Detroit",
            state: "MI",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // ee@gmail.com
        newLogin = {
            email: "ee@gmail.com",
            firstname: "Erin",
            lastname: "Erickson",
            city: "Ellensburg",
            state: "WA",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // ff@gmail.com
        newLogin = {
            email: "ff@gmail.com",
            firstname: "Francis",
            lastname: "Fraklin",
            city: "Boryspol",
            state: "Kyiv",
            country: "Ukrane",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // gg@gmail.com
        newLogin = {
            email: "gg@gmail.com",
            firstname: "Gene",
            lastname: "Gray",
            city: "Kyiv",
            state: "Kyiv",
            country: "Ukrane",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // hh@gmail.com
        newLogin = {
            email: "hh@gmail.com",
            firstname: "Hank",
            lastname: "Hand",
            city: "Moscow",
            state: "Moscow",
            country: "Russia",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // ii@gmail.com
        newLogin = {
            email: "ii@gmail.com",
            firstname: "Ion",
            lastname: "Ink",
            city: "Copenhagen",
            state: "Copenhagen",
            country: "Denmark",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // jj@gmail.com
        newLogin = {
            email: "jj@gmail.com",
            firstname: "Jane",
            lastname: "Jean",
            city: "Aarhus",
            state: "Aarhus",
            country: "Denmark",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // kk@gmail.com
        newLogin = {
            email: "kk@gmail.com",
            firstname: "Kile",
            lastname: "Kind",
            city: "Minneapolis",
            state: "MN",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // ll@gmail.com
        newLogin = {
            email: "ll@gmail.com",
            firstname: "Lee",
            lastname: "Lore",
            city: "Missoula",
            state: "MT",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // mm@gmail.com
        newLogin = {
            email: "mm@gmail.com",
            firstname: "Mary",
            lastname: "More",
            city: "Fairbanks",
            state: "Alaska",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // nn@gmail.com
        newLogin = {
            email: "nn@gmail.com",
            firstname: "Nate",
            lastname: "Nad",
            city: "Boise",
            state: "ID",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // oo@gmail.com
        newLogin = {
            email: "oo@gmail.com",
            firstname: "Ophra",
            lastname: "Oh",
            city: "Chicago",
            state: "IL",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // pp@gmail.com
        newLogin = {
            email: "pp@gmail.com",
            firstname: "Pam",
            lastname: "Pen",
            city: "Boston",
            state: "MA",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // qq@gmail.com
        newLogin = {
            email: "qq@gmail.com",
            firstname: "Que",
            lastname: "Quo",
            city: "Seattle",
            state: "WA",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // rr@gmail.com
        newLogin = {
            email: "Ron",
            firstname: "Red",
            lastname: "Hand",
            city: "Bothell",
            state: "WA",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // ss@gmail.com
        newLogin = {
            email: "ss@gmail.com",
            firstname: "Sam",
            lastname: "Seine",
            city: "Paris",
            state: "Paris",
            country: "France",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // tt@gmail.com
        newLogin = {
            email: "tt@gmail.com",
            firstname: "Ted",
            lastname: "Ton",
            city: "Berlin",
            state: "Berlin",
            country: "Germany",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // uu@gmail.com
        newLogin = {
            email: "uu@gmail.com",
            firstname: "Ule",
            lastname: "Uno",
            city: "Portland",
            state: "OR",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // vv@gmail.com
        newLogin = {
            email: "vv@gmail.com",
            firstname: "Vick",
            lastname: "Van",
            city: "Las Vegas",
            state: "NV",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // ww@gmail.com
        newLogin = {
            email: "ww@gmail.com",
            firstname: "Wally",
            lastname: "Win",
            city: "Omaha",
            state: "NE",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // xx@gmail.com
        newLogin = {
            email: "xx@gmail.com",
            firstname: "Xly",
            lastname: "Xue",
            city: "Portland",
            state: "ME",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // yy@gmail.com
        newLogin = {
            email: "yy@gmail.com",
            firstname: "Yale",
            lastname: "Yam",
            city: "London",
            state: "London",
            country: "England",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        // zz@gmail.com
        newLogin = {
            email: "zz@gmail.com",
            firstname: "Zoe",
            lastname: "Zue",
            city: "Kenmore",
            state: "WA",
            country: "USA",
            isactive: true,
            isadministrator: false,
            password: "123"
        };
        newLogins.push(newLogin);

        for( let i=0; i<newLogins.length; i++) {
            let observable = this._httpService.createUserLogin(newLogins[i]);
            observable.subscribe(data => {
                if( data['result'] === "Error") {
                    console.log("Error:", data);
                } else {
                    console.log("Success:", data);
                }
            });
        }
    }

}
