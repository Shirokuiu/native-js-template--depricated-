import { ViewComponent } from '../../core';

export class ButtonView extends ViewComponent {
  getTemplate(): string {
    return `<button class="button" type="button">Hide block</button>`.trim();
  }
}
