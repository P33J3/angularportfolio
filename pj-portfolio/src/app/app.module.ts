import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectCardComponent } from './projectcard/projectcard.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavbarComponent } from './navbar/navbar.component'; // Import the MatExpansionModule
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ProjectsComponent,
    ExperienceComponent,
    FooterComponent,
    ProjectCardComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule, 
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
