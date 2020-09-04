import { HelloTemplate } from './hello.template';
import { DOM } from '../../core';
import { HelloInputController } from '..';

export class HelloController {
  private helloTemplate = new HelloTemplate();
  private helloInputController: HelloInputController;

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    const $hello = this.helloTemplate.getElement();
    const $helloInputWrap = $hello.querySelector('.hello__input-wrap') as HTMLElement;
    const $helloText = $hello.querySelector('.hello__text') as HTMLElement;
    this.helloInputController = new HelloInputController($helloInputWrap);

    DOM.render(this.$container, $hello);

    this.helloInputController.init();

    const unsubscribe$ = this.helloInputController.onInputEmit$.subscribe(
      'onInput',
      (res: string) => {
        $helloText.textContent = res;

        if (res.length > 5) {
          // Отписка от эмиттера
          unsubscribe$();
        }
      }
    );
  }
}
