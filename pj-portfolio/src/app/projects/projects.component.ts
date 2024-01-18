import { Component, OnInit } from '@angular/core';

interface Project {
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
    { title: 'Project 1', description: '...', link: '...' },
    // ... your other projects
  ];

  constructor() { }

  ngOnInit(): void {
  }
}