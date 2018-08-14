import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.titleService.setTitle( "About | Sean Kyle Niño Quijote" );
  }
}
