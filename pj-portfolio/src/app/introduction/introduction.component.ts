import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  bgImageUrl: string = '../../assets/images/markus-spiske-Skf7HxARcoc-unsplash.jpg';

  constructor() { }

  ngOnInit(): void {
  }
}