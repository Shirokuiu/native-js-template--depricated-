import { ViewComponent } from '../../core';

export class BlockView extends ViewComponent {
  getTemplate(): string {
    return `<div class="block" style="border: 1px solid tomato">
        <p>Title</p>
        <p>Description</p>
      </div>`.trim();
  }
}
