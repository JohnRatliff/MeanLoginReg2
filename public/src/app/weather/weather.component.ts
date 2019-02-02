import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    city: string;
    country: string;
    humidity: number;
    tempAvg: number;
    tempMin: number;
    tempMax: number;
    status: string;

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.city = this._httpService.userCity;
        this.country = this._httpService.userCountry;
        this.humidity = null;
        this.tempAvg = null;
        this.tempMin = null;
        this.tempMax = null;
        this.status = "";
        this.getCurrentWeather();
    }

    getCurrentWeather() {
        let observable = this._httpService.getCurrentWeather(this.city, this.country);
        observable.subscribe(data => {
            console.log("---------------------CurrentWeather----------------------");
            console.log("data:", data);
            this.humidity = data["main"].humidity;
            this.tempAvg = data["main"].temp;
            this.tempMin = data["main"].temp_min;
            this.tempMax = data["main"].temp_max;
            this.status = data["weather"][0].description;
        });
    }

}
