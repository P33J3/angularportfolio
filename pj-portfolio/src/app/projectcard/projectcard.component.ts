import { Component, Input } from '@angular/core';

interface Project {
  image: string;
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

  @Input() project: Project = { image: '', title: '', description: '', link: '' }; // Default values;

  constructor() { }
}