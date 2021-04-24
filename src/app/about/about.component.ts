import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
import { environment } from '../../environments/environment';
import { MnFullpageModule } from 'ngx-fullpage';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor(@Inject(WINDOW) private window: Window) {
		this.config = {
			licenseKey: environment.FULLPAGE_LICENSE_KEY,
			anchors: ['firstPage', 'secondPage'],
			// navigationTooltips: ['Kepler Insight', 'Work'],
		  // navigation: true,
			keyboardScrolling: true,
		  // autoScrolling: true,
			menu: '#menu',

			// fullpage callbacks
			// afterResize: () => {
			// 	console.log("After resize");
			// },
			// afterLoad: (origin, destination, direction) => {
			// 	console.log(origin.index);
			// }
    }
  }

  ngOnInit() {
    this.window.scrollTo(0, 0);
  }

	getRef(fullPageRef) {
		this.fullpage_api = fullPageRef
  }

  private urls: string[] = [
    '../assets/images/about_f5.jpg',
    '../assets/images/about_simple.jpg',
    '../assets/images/about_arcade.jpg',
    '../assets/images/about_dev.jpg',
    '../assets/images/about_tekken_cover.jpg',
    '../assets/images/about_tekken_ingame1.png',
    '../assets/images/about_tekken_ingame2.jpg',
    '../assets/images/about_swkotor2.jpg',
    '../assets/images/about_iceborne.png',
    '../assets/images/about_iceborne_ingame1.jpg',
    '../assets/images/about_iceborne_ingame2.jpg',
    '../assets/images/about_mhfu.png',
    '../assets/images/about_crypto.jpg',
  ];

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }
}
