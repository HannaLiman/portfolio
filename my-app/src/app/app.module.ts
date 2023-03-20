import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// My declared components:
import { ToolbarComponent } from './toolbar/toolbar.component';

// Material components:
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {MatCardModule} from '@angular/material/card';

//Router
import { AppRoutingModule } from './app-routing.module';

//Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//For markdown posts
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { SingleProjectPageComponent } from './single-project-page/single-project-page.component';
import { FooterComponent } from './footer/footer.component';
import { LastSectionComponent } from './last-section/last-section.component';




@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    ToolbarComponent,
    ProjectsSectionComponent,
    QuoteSectionComponent,
    ProjectListComponent,
    SingleProjectPageComponent,
    FooterComponent,
    LastSectionComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
