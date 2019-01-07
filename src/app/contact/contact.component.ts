import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window) { }

  ngOnInit() {
    this.window.scrollTo(0, 0);
  }

}
