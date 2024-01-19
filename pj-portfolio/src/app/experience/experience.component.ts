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
    { 
      title: 'Junior Web Developer', 
      years: '2022-Present', 
      description: "Assist with creating front-end Angular Components which facilitates business "+
        "processes."},
    { 
      title: 'Multimedia Technologist', 
      years: '2014-2022', 
      description: 'Produce, record and edit university events, classes and creative assignments' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
