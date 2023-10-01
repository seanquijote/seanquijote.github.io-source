// Angular Modules
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Page Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            depth: "depthHome",
            title: "Sean Quijote - Full-Stack Developer",
            metatags: {
                description: "I'm a Full-Stack Developer living in Cebu",
                keywords: "sean quijote, quijote, seanquijote"
            }
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            depth: "depthAbout",
            title: "Sean Quijote - About",
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
            title: "Sean Quijote - Work",
            metatags: {
                description: "My work experience",
                keywords: "work seanquijote, work sean quijote"
            }
        }
    },
    {
		path: 'projects',
		component: ProjectsComponent,
		data: {
			depth: "depthProjects",
			title: "Sean Quijote - Projects",
			metatags: {
				description: "A few of my projects",
				keywords: "projects seanquijote, projects sean quijote"
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
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
