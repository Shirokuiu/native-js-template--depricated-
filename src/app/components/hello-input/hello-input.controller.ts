import { HelloInputView } from './hello-input.view';
import { View, EventEmitter, Controller } from '../../core';

export class HelloInputController extends Controller {
  // Чтобы крректно отработал controller.destroy
  views = [];
  controllers = [];
  //

  readonly onInputEmit$ = new EventEmitter<string>();

  private helloInputView = new HelloInputView();

  constructor(private readonly $containerRef: HTMLElement) {
    super();

    this.onInput = this.onInput.bind(this);
  }

  init(): void {
    const $inputRef = this.helloInputView.getElement();

    View.render(this.$containerRef, $inputRef);

    $inputRef.addEventListener('input', (evt: Event & { target: HTMLInputElement }) => {
      const { target } = evt;

      this.onInput(target.value);
    });

    this.setViews = [this.helloInputView];
  }

  onInput(value: string): void {
    this.onInputEmit$.emit(value);
  }
}
