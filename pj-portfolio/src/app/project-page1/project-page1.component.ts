import { Component } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

interface Screenshot {
  url: string;
}

@Component({
  selector: 'app-project-page1',
  templateUrl: './project-page1.component.html',
  styleUrls: ['./project-page1.component.css']
})
export class ProjectPage1Component {

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
    projectTitle: 'Risk Registers Analytics',
    projectDescription: "For this project I was tasked with creating a web application that would " +
      "allow users to upload a risk register and then view analytics on the data.\n\n " +
       "The application was built using Angular and Firebase as well as Syncfusion Spreadsheet Component. The application allows users to upload " +
       "a risk register in the form of a XLSX file. The application then parses the XLSX file and stores the data in a Firebase database."+
       " The application then displays the data in a table and allows users to filter the data by risk category. " +
       "The application also allows users to download the data and has role-based access. \n\n" +
       "The main challenges faced had to do with parsing the XLSX file and displaying the data in a table. " + 
       "As well as figuring out the configuration for Firebase. \n\n",
    technologies: ["Angular", "TypeScript", "HTML", "CSS", "Firebase (Authentication, Database, Functions)"],
    screenshots: [
      { url: "../../assets/images/riskreg_login.png" },
      { url: "../../assets/images/riskreg_import.png" },
      { url: "../../assets/images/riskreg_adduser.png" },
      { url: "../../assets/images/riskreg_xcel.png" }
    ]
  };
}
