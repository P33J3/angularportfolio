import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectCardComponent } from './projectcard/projectcard.component';
import { NavbarComponent } from './navbar/navbar.component'; // Import the MatExpansionModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectPage1Component } from './project-page1/project-page1.component';
import { ProjectPage2Component } from './project-page2/project-page2.component';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ExperienceComponent,
    FooterComponent,
    ProjectCardComponent,
    NavbarComponent,
    ProjectPage1Component,
    ProjectPage2Component,
    MainComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
