import { Controller, EventEmitter, View } from '../../core';
import { ButtonView } from './button.view';

export class ButtonController extends Controller {
  // Чтобы крректно отработал controller.destroy
  views = [];
  controllers = [];
  //

  readonly onButtonClickEmit$ = new EventEmitter();

  private buttonView = new ButtonView();

  constructor(private readonly $containerRef: HTMLElement) {
    super();
  }

  init(): void {
    const $buttonRef = this.buttonView.getElement();

    View.render(this.$containerRef, $buttonRef);

    $buttonRef.addEventListener('click', () => {
      this.onButtonClickEmit$.emit();
    });

    this.setViews = [this.buttonView];
  }
}
