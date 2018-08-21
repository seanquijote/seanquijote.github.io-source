import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window, ) { }

  ngOnInit() {
    this.window.scrollTo(0, 0);
  }

}
