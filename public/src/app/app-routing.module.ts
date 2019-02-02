import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserEditPasswordComponent } from './user-edit-password/user-edit-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AppComponent } from './app.component';
import { componentFactoryName } from '@angular/compiler';
import { WeatherComponent } from './weather/weather.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { UserTestDataComponent } from './user-test-data/user-test-data.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: "user-login", component: UserLoginComponent },
    { path: "user-registration", component: UserRegistrationComponent },
    { path: "user-logout", component: UserLogoutComponent },
    { path: "user-edit-password", component: UserEditPasswordComponent },
    { path: "user-profile", component: UserProfileComponent },
    { path: "user-list", component: UserListComponent },
    { path: "user-edit/:id", component: UserEditComponent },
    { path: "user-view/:id", component: UserViewComponent },
    { path: "weather", component: WeatherComponent },
    { path: "google-map/:mapstyle", component: GoogleMapComponent },
    { path: "user-test-data", component: UserTestDataComponent },
    { path: "", component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
