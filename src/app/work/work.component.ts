import * as myGlobals from "../globals";
import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor(@Inject(WINDOW) private window: Window, private mScrollbarService: MalihuScrollbarService) {
		this.config = {
      licenseKey: myGlobals.fullpageLicense,
			menu: '#menu',
			anchors: ['kepler', 'secondPage'],
			navigationTooltips: ['Kepler Insight Portal', 'Work'],
		  navigation: true,
			keyboardScrolling: false,
		  autoScrolling: false,

      // Scrolling
      css3: true,
      scrollBar: true,


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
    // this.mScrollbarService.initScrollbar(document.body, { axis: 'y', theme: 'dark-3' });
  }

	getRef(fullPageRef) {
		this.fullpage_api = fullPageRef
	}
}
