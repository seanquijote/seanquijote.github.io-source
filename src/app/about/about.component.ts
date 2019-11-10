import * as myGlobals from "../globals";
import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';

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
			licenseKey: myGlobals.fullpageLicense,
			// anchors: ['kip', 'secondPage'],
			// navigationTooltips: ['Kepler Insight', 'Work'],
		  // navigation: true,
			// keyboardScrolling: true,
		  // autoScrolling: true,
			// menu: '#menu',

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
}
