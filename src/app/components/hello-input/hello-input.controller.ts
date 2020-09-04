import { HelloInputTemplate } from './hello-input.template';
import { DOM, EventEmitter } from '../../core';

export class HelloInputController {
  readonly onInputEmit$ = new EventEmitter<'onInput', string>();

  private helloInputTemplate = new HelloInputTemplate();

  constructor(private readonly $container: HTMLElement) {
    this.onInput = this.onInput.bind(this);
  }

  init(): void {
    const $input = this.helloInputTemplate.getElement();

    DOM.render(this.$container, $input);

    $input.addEventListener('input', (evt: Event & { target: HTMLInputElement }) => {
      const { target } = evt;

      this.onInput(target.value);
    });
  }

  onInput(value: string): void {
    this.onInputEmit$.emit('onInput', value);
  }
}
