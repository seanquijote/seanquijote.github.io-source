import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Inject } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
import { environment } from '../../environments/environment';
import { HttpService } from '../http.service';

declare var particlesJS: any;
declare var pJSDom: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  particleStyle: object = {
    'position': 'fixed',
    'width': '100%',
    'z-index': -1,
    'top': 0,
    'left': 0,
  };
  particleParams: object = {};
  config: any;
  fullpage_api: any;
  data: object = {};
  introList: string[] = [];
  programmingList: string[] = [];
  leisureList: string[] = [];


  constructor(@Inject(WINDOW) private window: Window, private httpService: HttpService) {
		this.config = {
			licenseKey: environment.FULLPAGE_LICENSE_KEY,
			anchors: ['intro', 'hobbies'],
			keyboardScrolling: true,
			menu: '#menu',
			navigation: false,
			autoScrolling: false,
      css3: false,
      scrollBar: true,

			/* Fullpage callbacks */
			// afterResize: () => {
			// 	console.log("After resize");
			// },
			// afterLoad: (origin, destination, direction) => {
			// 	console.log(origin.index);
			// }
    }
  }

  ngOnInit() {
    this.window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    this.httpService.getAboutData().subscribe(
      (response) => {
        this.data = response
        this.introList = this.data['introduction']
        this.programmingList = this.data['programming']
        this.leisureList = this.data['leisure']
      },
      (error) => { console.log(error) }
    )
    particlesJS.load('particles-js-about', '../assets/particles-bubbles.json', null)
  }

  ngOnDestroy() {
    pJSDom[0].pJS.fn.vendors.destroypJS()
    pJSDom = []
  }

	getRef(fullPageRef) {
		this.fullpage_api = fullPageRef
  }

  // private urls: string[] = [
  //   '../assets/images/about_f5.jpg',
  //   '../assets/images/about_simple.jpg',
  //   '../assets/images/about_arcade.jpg',
  //   '../assets/images/about_dev.jpg',
  //   '../assets/images/about_tekken_cover.jpg',
  //   '../assets/images/about_tekken_ingame1.png',
  //   '../assets/images/about_tekken_ingame2.jpg',
  //   '../assets/images/about_swkotor2.jpg',
  //   '../assets/images/about_iceborne.png',
  //   '../assets/images/about_iceborne_ingame1.jpg',
  //   '../assets/images/about_iceborne_ingame2.jpg',
  //   '../assets/images/about_mhfu.png',
  //   '../assets/images/about_crypto.jpg',
  // ];

  // public get images(): IMasonryGalleryImage[] {
  //   return this.urls.map(m => <IMasonryGalleryImage>{
  //     imageUrl: m
  //   });
  // }
}
