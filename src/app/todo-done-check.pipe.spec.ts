import { TodoDoneCheckPipe } from './todo-done-check.pipe';

describe('TodoDoneCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new TodoDoneCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
