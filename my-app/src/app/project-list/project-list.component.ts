import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  cards = [  
    { slug: 'project1', content: 'Project 1' },  
    { slug: 'project2', content: 'Project 2' },  
    { slug: 'project3', content: 'Project 3' }
  ];

}
