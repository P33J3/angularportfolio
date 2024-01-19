import { Component, OnInit } from '@angular/core';

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    { 
      image: '../../assets/images/pexels-thisisengineering-3862365.jpg',
      title: 'Risk Registers Analytics ', 
      description: 'An app that processess a custom risk register template'+
      'that allows for users to analyze trends in the registers.', 
      link: '...' },
      { 
        image: '../../assets/images/kira-auf-der-heide-_Zd6COnH5E8-unsplash.jpg',
        title: 'Physiotherapy Client Management ', 
        description: 'An app that stores client information; customized for physiotherapists',
         link: '...' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}