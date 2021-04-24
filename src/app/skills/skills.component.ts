import * as myGlobals from "../globals";
import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Inject} from '@angular/core';
import { fadeIn } from '../router-animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [fadeIn()],
  host: {'[@fadeIn' : ''}
})
export class SkillsComponent implements OnInit {
  config: any;
  fullpage_api: any;
  langCurrentlyUsing: Array<any> = ["C#", "Typescript", "PHP", "JavaScript", "HTML", "CSS"];
  langMostExp: Array<any> = ["C#", "Typescript", "PHP"];

  constructor(@Inject(WINDOW) private window: Window) {
    this.config = {
      licenseKey: myGlobals.fullpageLicense,
			menu: '#menu',
			anchors: ['langs', 'tools'],
			navigationTooltips: ['Languages', 'Tools'],
      // sectionsColor: ['#efefef', '#a1a1a1'],
		  navigation: true,
			keyboardScrolling: true,
		  autoScrolling: true,
      // loopBottom: true,
      // loopTop: true,

			// // fullpage callbacks
			// afterResize: () => {
			// 	console.log("After resize");
			// },
			// afterLoad: (origin, destination, direction) => {
			// 	console.log(origin);
			// 	console.log(destination);
			// 	console.log(direction);
			// }
    }
  }

  ngOnInit() {
    this.window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    AOS.init();
  }

  getRef(fullPageRef) {
		this.fullpage_api = fullPageRef;
	}
}
