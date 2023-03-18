import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-single-project-page',
  templateUrl: './single-project-page.component.html',
  styleUrls: ['./single-project-page.component.css']
})
export class SingleProjectPageComponent implements OnInit{
  markdownContent: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/posts/project1.md', { responseType: 'text' })
      .subscribe(content => this.markdownContent = content);
  }
}
