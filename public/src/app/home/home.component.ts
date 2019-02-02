import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    workbenchURL: string = "https://faumc.files.wordpress.com/2014/01/workbenchcmyk_wow.jpg?w=792";

    constructor() { }

    ngOnInit() {
    }

}
