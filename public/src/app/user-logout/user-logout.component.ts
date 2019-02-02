import { Component, OnInit  } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

  ngOnInit() {
      localStorage.clear();
      this._router.navigate([''])
  }

}
