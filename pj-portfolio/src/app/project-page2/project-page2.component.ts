import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

interface Screenshot {
  url: string;
}


@Component({
  selector: 'app-project-page2',
  templateUrl: './project-page2.component.html',
  styleUrls: ['./project-page2.component.css']
})
export class ProjectPage2Component {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.document.defaultView?.scrollTo(0, 0);
  }

  projectData: {
    projectTitle: string;
    projectDescription: string;
    technologies: string[];
    screenshots: Screenshot[];
  } = {
    projectTitle: 'Physiotherapy Client Management',
    projectDescription: "As a part of my 'Introduction to Software Engineering' course, " +
    "We were tasked with creating a client management system for a physiotherapist.\n" +
     "The system was to be able to store, retrieve and edit client information, " +
     "The app has a Firebase Databsase and the Node.js, Express.js backend is hosted on Render.com \n" +
     "The fronetend is built with Angular and the app is hosted on Netlify.",      
    technologies: ["Angular", "TypeScript", "HTML", "CSS", "Firebase Database", "Node.js", "Express.js"],
    screenshots: [
      { url: "../../assets/images/physiocms-search.png" },
      { url: "../../assets/images/physiocms-viewclients.png" },
      { url: "../../assets/images/physiocms-addclient.png" },
    ]
  };
}
