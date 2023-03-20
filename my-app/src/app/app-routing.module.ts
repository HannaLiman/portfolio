import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SingleProjectPageComponent } from './single-project-page/single-project-page.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { ProjectListComponent } from './project-list/project-list.component';


// const routes: Routes = [
//   { path: 'project', component: SingleProjectPageComponent },
//   { path: 'project1', component: SingleProjectPageComponent },
  
// ];

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'app-project-list', component: ProjectListComponent },
  { path: ':slug', component: SingleProjectPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
