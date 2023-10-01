import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpService } from '../http.service';
import { fadeIn } from '../router-animations';
import Typed from 'typed.js';

declare var particlesJS: any;
declare var pJSDom: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [fadeIn()],
  // host: {'[@fadeIn' : ''}
})
export class HomeComponent implements OnInit, OnDestroy {
  particleStyle: object = {
    'position': 'fixed',
    'width': '100%',
    'z-index': -1,
    'top': 0,
    'left': 0,
  };
  particleParams: object = {};
  typedOptions: object = {
    strings: [],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 5000,
    showCursor: true,
    cursorChar: '|',
    loop: true,
    contentType: 'null'
  };
  typedDesktop: any;
  typedMobile: any;
  width: number = 100;
  height: number = 100;
  lastUpdatedOn: any;
  data: object = {};
  firstName: string = '';
  lastName: string = '';
  fullName: string = '';
  linkedInUrl: string = '';
  gitHubUrl: string = '';

	constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

	ngOnInit() {
    this.httpService.getHomeData().subscribe(
      (response) => {
        this.data = response
        this.firstName = this.data['firstName'].toUpperCase()
        this.lastName = this.data['lastName'].toUpperCase()
        this.fullName = this.firstName + ' ' + this.lastName
        this.typedOptions['strings'] = this.data['loadingMessages']
        this.linkedInUrl = this.data['socialUrls']['linkedIn']
        this.gitHubUrl = this.data['socialUrls']['gitHub']
        this.typedDesktop = new Typed('.typed-element-desktop', this.typedOptions)
        this.typedMobile = new Typed('.typed-element-mobile', this.typedOptions)
      },
      (error) => { console.log(error) }
    )


    particlesJS.load('particles-js', '../assets/particles-circles.json', null)
    this.lastUpdatedOn = "August 26, 2022"
  }

  ngOnDestroy() {
    pJSDom[0].pJS.fn.vendors.destroypJS()
    pJSDom = []
    this.typedDesktop.destroy()
    this.typedMobile.destroy()
  }
}
