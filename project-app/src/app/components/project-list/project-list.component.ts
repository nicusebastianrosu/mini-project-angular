import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { Task } from 'src/app/models/task';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectDataService]
})
export class ProjectListComponent implements OnInit {

  //public projectDataService: ProjectDataService;

  newTask: Task = new Task();
  tasks: Task[] = [];
  no: number | any;

  constructor(public projectDataService: ProjectDataService,
              private router:Router,
              ) {
    this.projectDataService = projectDataService;
  }

  addTask() {
    this.projectDataService.addTask(this.newTask);
    this.newTask = new Task();
  }

  toggleTaskComplete(task: Task) {
    this.projectDataService.toggleTaskComplete(task);
    console.log(task.complete);
  }

  removeTask(task: { id: any; }) {
    this.projectDataService.deleteTaskById(task.id);
  }

  getTasks() {
    return this.projectDataService.getAllTasks();
  }

  onBackButtonClick(): void {
    
    this.router.navigate(['/iesire']);
    
    // if(this.no === -1){
    //   this.router.navigate(['/iesire']);
    // } else{
    //   this.router.navigate(['/iesire']);
    // }
  }


  ngOnInit(): void {
  }

 

}
