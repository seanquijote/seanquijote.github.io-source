import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        data: { 
            depth: "depthHome", 
            title: "Sean Quijote - Junior Software Engineer",
            metatags: {
                description: "I'm Junior Software Engineer living in Cebu",
                keywords: "sean quijote, quijote, seanquijote"
            }
        } 
    },
    { 
        path: 'about', 
        component: AboutComponent, 
        data: { 
            depth: "depthAbout",
            title: "About",
            metatags: {
                description: "A little bit about me",
                keywords: "about seanquijote, about sean quijote"
            }
        } 
    },
    { 
        path: 'work',
        component: WorkComponent, 
        data: { 
            depth: "depthWork",
            title: "Work",
            metatags: {
                description: "A few of my projects",
                keywords: "work seanquijote, work sean quijote"
            }
        } 
    },
    { 
        path: 'contact', 
        component: ContactComponent, 
        data: { 
            depth: "depthContact",
            title: "Contact",
            metatags: {
                description: "You can reach me through here",
                keywords: "contact seanquijote, contact sean quijote"
            } 
        } 
    },
    { path: '**', redirectTo: '/' }

    // { path: 'path4', component: Name4Component },
    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
