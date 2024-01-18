import { Component, Input } from '@angular/core';

interface Project {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-project-card',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})
export class ProjectCardComponent {

  @Input() project: Project = { title: '', description: '', link: '' }; // Default values;

  constructor() { }
}