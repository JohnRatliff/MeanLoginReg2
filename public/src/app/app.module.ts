import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserEditPasswordComponent } from './user-edit-password/user-edit-password.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WeatherComponent } from './weather/weather.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { UserTestDataComponent } from './user-test-data/user-test-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserLogoutComponent,
    UserEditPasswordComponent,
    UserEditComponent,
    UserListComponent,
    UserProfileComponent,
    UserViewComponent,
    WeatherComponent,
    GoogleMapComponent,
    UserTestDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
