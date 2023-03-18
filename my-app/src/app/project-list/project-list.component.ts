import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  cards = [
    { link: '/project1', content: 'Project 1' }, // content är Namnet på länken
    { link: '/project2', content: 'Project 2' },
    { link: '/project3', content: 'Project 3' }
  ];
}
