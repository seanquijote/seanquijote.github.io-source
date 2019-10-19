import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window, private mScrollbarService: MalihuScrollbarService) { }

  ngOnInit() {
    this.window.scrollTo(0, 0);
    // this.mScrollbarService.initScrollbar(document.body, { axis: 'y', theme: 'dark-3' });
  }

}
