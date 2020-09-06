import { Controller, View } from '../../core';
import { BlockWrapView } from './block-wrap.view';
import { BlockController, ButtonController } from '..';

export class BlockWrapController extends Controller {
  // Чтобы крректно отработал controller.destroy
  views = [];
  controllers = [];
  //

  private blockWrapView = new BlockWrapView();

  private blockController: BlockController;
  private buttonController: ButtonController;

  constructor(private readonly $containerRef: HTMLElement) {
    super();
  }

  init(): void {
    View.render(this.$containerRef, this.blockWrapView.getElement());

    const $blockWrapRef = this.blockWrapView.getElement();

    this.blockController = new BlockController($blockWrapRef);
    this.buttonController = new ButtonController($blockWrapRef);

    this.blockController.init();
    this.buttonController.init();

    this.buttonController.onButtonClickEmit$.subscribe(() => {
      if (this.blockController) {
        this.blockController.destroy();
        this.blockController = undefined;
      }
    });

    this.setViews = [this.blockWrapView];
    this.setControllers = [this.blockController, this.buttonController];
  }
}
