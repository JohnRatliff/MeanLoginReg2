import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { googleMapKey } from '../../../../settings';

//const settings = require('../../../../settings');

@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
    isGoogleMapStaticVisible: boolean;
    isGoogleMapEmbeddedVisible: boolean;
    googleMapKey: string;
    city: string;
    state: string;
    country: string;
    googleMapStaticImageSrc: string;
    googleMapEmbeddedImageSrc: SafeResourceUrl;
    imageHeight: string;

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.googleMapKey = googleMapKey;

            this.city = this._httpService.userCity;
            this.state = this._httpService.userState;
            this.country = this._httpService.userCountry;
            this.isGoogleMapStaticVisible = false;
            this.isGoogleMapEmbeddedVisible = false;
            let mapStyle = params['mapstyle'];
            if( mapStyle.toLowerCase() === 'static') {
                // Display google static map
                this.isGoogleMapStaticVisible = true;
                this.googleMapStaticImageSrc =
                `https://maps.googleapis.com/maps/api/staticmap?center=${this.city},${this.state}&zoom=14&size=2000x938&key=${this.googleMapKey}`;
       
            } else {
                // Display google embedded map
                this.isGoogleMapEmbeddedVisible = true;
                let s = `https://www.google.com/maps/embed/v1/place?key=${this.googleMapKey}&q=${this.city}+${this.state}+${this.country}`;
                this.googleMapEmbeddedImageSrc = this.sanitizer.bypassSecurityTrustResourceUrl(s);

                // Set map image height based on device height
                if( window.innerHeight < 400) {
                    this.imageHeight = "200px";
                } else if(window.innerHeight < 700) {
                    this.imageHeight = "400px";
                } else {
                    this.imageHeight = "600px";
                }
            }
        });
        console.log("media-width:", window.innerWidth);
        console.log("media-height:", window.innerHeight);
    }

}
