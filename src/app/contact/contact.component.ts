import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private titleService: Title, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.titleService.setTitle( "Contact | Sean Kyle Niño Quijote" );
  }

}
