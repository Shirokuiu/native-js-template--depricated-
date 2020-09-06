import { BlockWrapController, HelloController, SvgController } from '..';
import { Controller } from '../../core';

export class AppController extends Controller {
  // Чтобы крректно отработал controller.destroy
  views = [];
  controllers = [];
  //

  private svgController: SvgController;
  private helloController: HelloController;
  private blockWrapController: BlockWrapController;

  constructor(private readonly $container: HTMLElement) {
    super();

    this.svgController = new SvgController(this.$container);
    this.helloController = new HelloController(this.$container);
    this.blockWrapController = new BlockWrapController(this.$container);
  }

  init(): void {
    this.svgController.init();
    this.helloController.init();
    this.blockWrapController.init();

    this.setControllers = [
      this.svgController,
      this.helloController,
      this.blockWrapController,
    ];
  }
}
