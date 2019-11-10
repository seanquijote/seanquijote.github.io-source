// Angular Modules
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Third Party Modules
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { MaterializeModule } from "angular2-materialize";
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { ParticlesModule } from 'angular-particle';

// Page Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    WorkComponent,
    AboutComponent,
    FooterComponent
  ],
  imports:[
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
  	BrowserAnimationsModule,
    Angular2FontawesomeModule,
    MaterializeModule,
    AngularFullpageModule,
    ParticlesModule
  ],
  providers: [ Title ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
