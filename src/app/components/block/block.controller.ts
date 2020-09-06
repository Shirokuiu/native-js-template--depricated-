import { Controller, View } from '../../core';
import { BlockView } from './block.view';

export class BlockController extends Controller {
  // Чтобы крректно отработал controller.destroy
  views = [];
  controllers = [];
  //

  private blockView = new BlockView();

  constructor(private readonly $containerRef: HTMLElement) {
    super();
  }

  init(): void {
    View.render(this.$containerRef, this.blockView.getElement());

    this.setViews = [this.blockView];
  }
}
