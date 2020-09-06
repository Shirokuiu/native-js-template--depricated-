import { ViewComponent } from '../../core';

export class HelloView extends ViewComponent {
  getTemplate(): string {
    return `
      <div class="hello">
        <h1>Hello world</h1>

        <div class="hello__input-wrap">
          <!-- HelloInputController !-->
        </div>

        <p class="hello__text"></p>
      </div>`.trim();
  }
}
