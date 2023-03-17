import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent {
  items = [
    { imageSrc: 'assets/house-painting-project1.JPG', colspan: 3, rowspan: 2 },
    { imageSrc: 'assets/house-painting-project2.JPG', colspan: 2, rowspan: 1 },
    { imageSrc: 'assets/flowers.JPG', colspan: 1, rowspan: 2, class: 'special-image' },
    { text: "Painting projects", colspan: 2, rowspan: 1 },
  ];
  
}
