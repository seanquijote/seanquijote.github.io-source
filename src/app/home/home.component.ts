import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.titleService.setTitle( "Sean Kyle Niño Quijote" );
  }

}
