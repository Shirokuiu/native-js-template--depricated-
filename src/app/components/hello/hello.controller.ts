import { HelloView } from './hello.view';
import { View } from '../../core';
import { HelloInputController } from '..';

export class HelloController {
  private helloView = new HelloView();
  private helloInputController: HelloInputController;

  constructor(private readonly $containerRef: HTMLElement) {}

  init(): void {
    const $helloRef = this.helloView.getElement();
    const $helloInputWrapRef = $helloRef.querySelector(
      '.hello__input-wrap'
    ) as HTMLElement;
    const $helloTextRef = $helloRef.querySelector('.hello__text') as HTMLElement;
    this.helloInputController = new HelloInputController($helloInputWrapRef);

    View.render(this.$containerRef, $helloRef);

    this.helloInputController.init();

    const unsubscribe$ = this.helloInputController.onInputEmit$.subscribe(
      'onInput',
      (res: string) => {
        $helloTextRef.textContent = res;

        if (res.length > 5) {
          // Отписка от эмиттера
          unsubscribe$();
        }
      }
    );
  }
}
