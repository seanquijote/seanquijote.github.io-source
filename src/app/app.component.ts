import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
import { SEOService } from './seo.service';

@Component({
	selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('depthHome => depthAbout', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0, background: 'url(assets/images/home_bg.png)'})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}))])
        ])
      ]),
      transition('depthAbout => depthHome', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}))])
        ])
      ]),

      transition('depthHome => depthWork', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateY(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0, background: 'url(assets/images/home_bg.png)'})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(-100%)'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(0)'}))])
        ])
      ]),
      transition('depthWork => depthHome', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateY(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(100%)'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(0)'}))])
        ])
      ]),

      transition('depthHome => depthContact', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0, background: 'url(assets/images/home_bg.png)'})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}))])
        ])
      ]),
      transition('depthContact => depthHome', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}))])
        ])
      ])
    ])
	]
})
export class AppComponent {

	constructor(private router: Router, private acitvatedRoute: ActivatedRoute, private title: Title, private seoService: SEOService) {
		seoService.addSeoData()
	}

	getDepth(outlet) {
  		return outlet.activatedRouteData['depth'];
	}
}
