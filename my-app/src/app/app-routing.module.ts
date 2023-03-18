import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SingleProjectPageComponent } from './single-project-page/single-project-page.component';
import { FirstSectionComponent } from './first-section/first-section.component';


const routes: Routes = [
  { path: 'project', component: SingleProjectPageComponent },
  { path: 'project1', component: SingleProjectPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
