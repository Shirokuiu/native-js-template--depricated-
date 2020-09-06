import { ViewComponent } from '../../core';

export class HelloInputView extends ViewComponent {
  getTemplate(): string {
    return `<input type="text" placeholder="Fill text">`.trim();
  }
}
