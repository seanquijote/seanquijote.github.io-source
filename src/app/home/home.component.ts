import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	config: any;
	fullpage_api: any;	

	constructor(@Inject(WINDOW) private window: Window, private router: Router, private route: ActivatedRoute) {
		this.config = {
			licenseKey: 'YOUR LICENSE KEY HERE',
			// anchors: ['firstPage', 'secondPage'],
			// navigationTooltips: ['Home', 'Work'],
		    // navigation: true,	
			keyboardScrolling: true,
		    autoScrolling: true,	
			menu: '#menu',

			// fullpage callbacks
			// afterResize: () => {
			// 	console.log("After resize");
			// },
			// afterLoad: (origin, destination, direction) => {
			// 	console.log(origin.index);
			// }
		};	  	
  	}

	ngOnInit() {
		// this.window.scrollTo(0, 0);
	}

	getRef(fullPageRef) {
		this.fullpage_api = fullPageRef;
	}
}
