import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectPage1Component } from './project-page1/project-page1.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { ProjectPage2Component } from './project-page2/project-page2.component';



const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'project-page1', component: ProjectPage1Component },
  { path: 'project-page2', component: ProjectPage2Component },
  { path: '**', redirectTo: '' } // Redirect any unmatched routes to the introduction
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
