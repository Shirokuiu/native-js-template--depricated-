import HeaderController from '../header/header.controller';
import CounterController from '../counter/counter.controller';
import { AppStateService } from '../../services';

export default class AppController {
  private readonly $container = document.querySelector('#root') as HTMLElement;

  private headerController: HeaderController;
  private counterController1: CounterController;
  private counterController2: CounterController;
  private readonly appStateService = new AppStateService();

  init(): void {
    this.headerController = new HeaderController(this.$container, this.appStateService);
    this.counterController1 = new CounterController(
      this.$container,
      this.appStateService
    );
    this.counterController2 = new CounterController(
      this.$container,
      this.appStateService
    );

    this.headerController.init();
    this.counterController1.init();
    this.counterController2.init();
  }
}
