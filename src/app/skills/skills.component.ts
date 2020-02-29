import * as myGlobals from "../globals";
import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor(@Inject(WINDOW) private window: Window, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.window.scrollTo(0, 0);
  }

  getRef(fullPageRef) {
		this.fullpage_api = fullPageRef
	}
}
