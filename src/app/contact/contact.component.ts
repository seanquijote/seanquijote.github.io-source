import * as myGlobals from "../globals";
import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor(@Inject(WINDOW) private window: Window) {
		this.config = {
			licenseKey: myGlobals.fullpageLicense,
			// anchors: ['firstPage', 'secondPage'],
			// navigationTooltips: ['Home', 'Work'],
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
