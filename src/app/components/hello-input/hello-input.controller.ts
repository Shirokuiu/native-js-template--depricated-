import { HelloInputView } from './hello-input.view';
import { View, EventEmitter } from '../../core';

export class HelloInputController {
  readonly onInputEmit$ = new EventEmitter<'onInput', string>();

  private helloInputView = new HelloInputView();

  constructor(private readonly $containerRef: HTMLElement) {
    this.onInput = this.onInput.bind(this);
  }

  init(): void {
    const $inputRef = this.helloInputView.getElement();

    View.render(this.$containerRef, $inputRef);

    $inputRef.addEventListener('input', (evt: Event & { target: HTMLInputElement }) => {
      const { target } = evt;

      this.onInput(target.value);
    });
  }

  onInput(value: string): void {
    this.onInputEmit$.emit('onInput', value);
  }
}
