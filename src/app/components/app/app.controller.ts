import { HelloController, SvgController } from '..';

export class AppController {
  private svgController: SvgController;
  private helloController: HelloController;

  constructor(private readonly $container: HTMLElement) {
    this.svgController = new SvgController(this.$container);
    this.helloController = new HelloController(this.$container);
  }

  init(): void {
    this.svgController.init();
    this.helloController.init();
  }
}
