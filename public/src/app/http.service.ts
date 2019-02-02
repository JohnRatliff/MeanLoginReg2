import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    openWeatherAPPID: string = "bc980831f7c361ab1441f8dfbb4fe5de";

    constructor(private _http: HttpClient) { }

    //--------------------------------------------------------------------------
    // Http Services

    // Get all users
    getAllUsers() {
        return this._http.get('/api/users');
    }

    // Get one user by Id
    getOneUserById(id: string) {
        return this._http.get(`/api/users/${id}`);
    }

    // Get one user by email
    getOneUserByEmail(email: string) {
        return this._http.get(`/api/users/email/${email}`);
    }

    // Add new user {newUserLogin}
    createUserLogin(newUserLogin: any) {
        return this._http.post('/api/users', newUserLogin);
    }

    // Update a user by ID {updateUser}
    updateUser( id: string, updateUser: any) {
        return this._http.put(`/api/users/${id}`, updateUser);
    }

    // Update user password by ID {editUserPassword}
    updateUserPassword( id: string, editUserPassword: any) {
        return this._http.put(`/api/users/changepassword/${id}`, editUserPassword);
    }
    
    // Log user in {userLogin}
    userLogin(userLogin: any) {
        return this._http.post('/api/users/login', userLogin);
    }

    // Delete user by Id
    deleteUserById(id: string) {
        return this._http.delete(`/api/users/${id}`);
    }

    // Get current weather
    getCurrentWeather(city: string, country: string) {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=${this.openWeatherAPPID}`;
        console.log("http.service.ts, url:",url);
        return this._http.get(url);
    }


    //--------------------------------------------------------------------------
    // Common Functions

    saveLoginToSession(userLogin: any) {
        localStorage.clear();
        localStorage.setItem('userisloggedin', 'true');
        localStorage.setItem('userid', userLogin.userid);
        localStorage.setItem('useremail', userLogin.email);
        localStorage.setItem('userfirstname', userLogin.firstname);
        localStorage.setItem('userlastname', userLogin.lastname);
        localStorage.setItem('usercity', userLogin.city);
        localStorage.setItem('userstate', userLogin.state);
        localStorage.setItem('usercountry', userLogin.country);
        localStorage.setItem('userisactive', userLogin.isactive);
        localStorage.setItem('userisadministrator', userLogin.isadministrator);
    }

    get userIsLoggedIn(): boolean {
        let s = localStorage.getItem('userisloggedin');
        if(s && s !== 'null' && s !== 'undefined') {
            if( s.toLowerCase() === 'true') {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    get userEmail(): string {
        let s = localStorage.getItem('useremail');
        if(s && s !== 'null' && s !== 'undefined') {
            return s;
        } else {
            return "";
        }
    }    

    get userId(): string {
        let s = localStorage.getItem('userid');
        if(s && s !== 'null' && s !== 'undefined') {
            return s;
        } else {
            return "";
        }
    }    

    get userFirstName(): string {
        let s = localStorage.getItem('userfirstname');
        if(s && s !== 'null' && s !== 'undefined') {
            return s;
        } else {
            return "";
        }
    }    

    get userCity(): string {
        let s = localStorage.getItem('usercity');
        if(s && s !== 'null' && s !== 'undefined') {
            return s;
        } else {
            return "";
        }
    }    

    get userState(): string {
        let s = localStorage.getItem('userstate');
        if(s && s !== 'null' && s !== 'undefined') {
            return s;
        } else {
            return "";
        }
    }    

    get userCountry(): string {
        let s = localStorage.getItem('usercountry');
        if(s && s !== 'null' && s !== 'undefined') {
            return s;
        } else {
            return "";
        }
    }    

    get userIsAdministrator(): boolean {
        let s = localStorage.getItem('userisadministrator');
        if(s && s !== 'null' && s !== 'undefined') {
            if( s.toLowerCase() === 'true') {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
