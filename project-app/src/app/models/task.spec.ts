import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });
  it('should accept values in constructor', () => {
    let task = new Task({
      title: "test",
      complete: true
    });
    expect(task.title).toEqual("test");
    expect(task.complete).toEqual(true);
  });
});
