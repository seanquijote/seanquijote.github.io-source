import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private titleService: Title, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.titleService.setTitle( "Work | Sean Kyle Niño Quijote" );
  }

}
