// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';


// @Component({
//   selector: 'app-single-project-page',
//   templateUrl: './single-project-page.component.html',
//   styleUrls: ['./single-project-page.component.css']
// })
// export class SingleProjectPageComponent implements OnInit{
//   markdownContent: string | undefined;

//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//     const slug = this.route.snapshot.paramMap.get('slug');
//     const path = `../../assets/posts/${slug}.md`;
//     this.http.get(path, { responseType: 'text' })
//       .subscribe(content => this.markdownContent = content);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-project-page',
  templateUrl: './single-project-page.component.html',
  styleUrls: ['./single-project-page.component.css']
})
export class SingleProjectPageComponent implements OnInit {
  markdownContent: string | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        const filePath = `../../assets/posts/${slug}.md`;
        this.http.get(filePath, { responseType: 'text' }).subscribe(
          content => (this.markdownContent = content),
          error => console.error(error)
        );
      }
    });
  }
}
