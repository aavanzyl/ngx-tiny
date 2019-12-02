import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './view/landing/landing.component';
import { AboutComponent } from './view/about/about.component';
import { SupportComponent } from './view/support/support.component';
import { GettingStartedComponent } from './view/getting-started/getting-started.component';



const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'support', component: SupportComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'project', loadChildren: './project/project.module#ProjectModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
