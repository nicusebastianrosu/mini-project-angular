import { TestBed, async, inject } from '@angular/core/testing';
import { Task } from '../models/task';

import { ProjectDataService } from './project-data.service';

describe('ProjectDataService', () => {
  let service: ProjectDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllTasks()', () => {
    it('should return an empty array by default', inject([ProjectDataService], (service: ProjectDataService) => {
      expect(service.getAllTasks()).toEqual([]);
    }))
    it('should return all tasks', inject([ProjectDataService], (service: ProjectDataService) => {
      let task1 = new Task({ title: 'test1', complete: false });
      let task2 = new Task({ title: 'test2', complete: true });
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getAllTasks()).toEqual([task1, task2]);
    }));
  });

  describe('#add(task)', () => {
    it('should automatically assign an incrementing id', inject([ProjectDataService], (service: ProjectDataService) => {
      let task1 = new Task({ title: 'test1', complete: false });
      let task2 = new Task({ title: 'test2', complete: true });
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getTaskById(1)).toEqual(task1);
      expect(service.getTaskById(2)).toEqual(task2);
    }));
  });
});
