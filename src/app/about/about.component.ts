import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window, private mScrollbarService: MalihuScrollbarService) { }

  ngOnInit() {
    this.window.scrollTo(0, 0);
  }
}
