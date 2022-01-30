import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectDataService } from './services/project-data.service';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ExpllinkComponent } from './components/expllink/expllink.component';

const appRoutes: Routes = [
  { path: 'iesire', component: ExpllinkComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectListComponent,
    ExpllinkComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [
    ProjectDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
