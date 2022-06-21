import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { environment } from '../../environments/environment';

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
			licenseKey: environment.FULLPAGE_LICENSE_KEY,
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
