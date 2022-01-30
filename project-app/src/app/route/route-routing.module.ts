import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from '../components/project-list/project-list.component';
import { ExpllinkComponent } from '../components/expllink/expllink.component';

const routes: Routes = [
  {path: 'list', component: ProjectListComponent},
  {path: 'iesire', component: ExpllinkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
