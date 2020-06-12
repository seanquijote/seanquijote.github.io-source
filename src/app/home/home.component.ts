import * as myGlobals from "../globals";
import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
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
  particleStyle: object = {};
  particleParams: object = {};
  typedOptions: object = {
    strings: [
      "jr. software engineer",
      "feel free to spin on your chair",
      "may the forks be with you",
      "tossed a coin to a witcher",
      "/* todo  Insert more witty messages */",
      "oh, you're still here?",
      "let's go back"
    ],
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

	constructor(@Inject(WINDOW) private window: Window, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
    particlesJS.load('particles-js', '../assets/particles.json', null)
    this.particleStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
    }
    this.typedDesktop = new Typed('.typed-element-desktop', this.typedOptions)
    this.typedMobile = new Typed('.typed-element-mobile', this.typedOptions)
  }

  ngOnDestroy() {
    pJSDom[0].pJS.fn.vendors.destroypJS()
    pJSDom = []
    this.typedDesktop.destroy()
    this.typedMobile.destroy()
  }
}
