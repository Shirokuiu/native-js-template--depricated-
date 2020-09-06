import { ViewComponent } from '../../core';

export class BlockWrapView extends ViewComponent {
  getTemplate(): string {
    return `<div class="block-wrap"></div>`.trim();
  }
}
