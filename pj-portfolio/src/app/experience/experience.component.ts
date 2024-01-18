import { Component, OnInit } from '@angular/core';

interface Experience {
  title: string;
  years: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    { title: 'Job Title 1', years: '2020-2023', description: '...' },
    { title: 'Job Title 2', years: '2018-2020', description: '...' },
    // ... your other experiences
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
