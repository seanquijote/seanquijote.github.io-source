import * as myGlobals from "../globals";
import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { fadeIn } from '../router-animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  animations: [fadeIn()],
  host: {'[@fadeIn' : ''}
})
export class WorkComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor(@Inject(WINDOW) private window: Window) {
		this.config = {
      licenseKey: myGlobals.fullpageLicense,
			menu: '#menu',
			anchors: ['kip', 'iap', 'gsp'],
			navigationTooltips: ['Kepler Insight Portal', 'ICT Alumni Portal', 'Graduate School Portal', 'Lexmark QA Tools'],
		  navigation: true,
			keyboardScrolling: true,
		  autoScrolling: false,

      // Scrolling
      css3: true,
      scrollBar: false,

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
    this.window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    AOS.init()
  }

	getRef(fullPageRef) {
		this.fullpage_api = fullPageRef
	}
}
