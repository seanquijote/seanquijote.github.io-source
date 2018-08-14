import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    WorkComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  	BrowserAnimationsModule,
    Angular2FontawesomeModule,
    MaterializeModule
  ],
  providers: [ Title ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
