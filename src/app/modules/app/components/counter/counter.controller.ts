import CounterComponent from './counter.component';
import { View } from '../../../../core';
import BtnController from '../btn/btn.controller';
import { BtnType } from '..';
import { AppStateService } from '../../services';

enum BtnAction {
  Inc = 'inc',
  Dec = 'dec',
  Async = 'async',
}

export interface Btn {
  type: BtnType;
  text: string;
  action: BtnAction;
}

export default class CounterController {
  private readonly counterComponent = new CounterComponent();

  private buttons: Btn[] = [
    {
      type: BtnType.Button,
      text: 'Добавить',
      action: BtnAction.Inc,
    },
    {
      type: BtnType.Button,
      text: 'Убрать',
      action: BtnAction.Dec,
    },
    {
      type: BtnType.Button,
      text: 'Async',
      action: BtnAction.Async,
    },
  ];

  readonly $counterRef = this.counterComponent
    .getElement()
    .querySelector('.counter__number') as HTMLElement;
  readonly $btnWrapRef = this.counterComponent
    .getElement()
    .querySelector('.counter__btn-wrap') as HTMLElement;

  count = 0;

  constructor(
    private readonly $container: HTMLElement,
    private readonly appStateService: AppStateService
  ) {
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  init(): void {
    View.render(this.$container, this.counterComponent.getElement());
    this.renderCount(this.count.toString(), this.$counterRef);
    this.buttons.forEach(({ type, text, action }: Btn) => {
      this.renderBtn({
        type,
        text,
        action,
        $container: this.$btnWrapRef,
      });
    });
  }

  onBtnClick(action: string): void {
    switch (action) {
      case BtnAction.Inc:
        this.count++;
        this.appStateService.inc();
        break;
      case BtnAction.Dec:
        if (this.count > 0) {
          this.count--;
          this.appStateService.dec();
        }
        break;
      case BtnAction.Async:
        this.count += 2;
        setTimeout(() => {
          this.renderCount(this.count.toString(), this.$counterRef);
        }, 1000);
        return;
    }

    this.renderCount(this.count.toString(), this.$counterRef);
  }

  renderCount(count: string, $ref: HTMLElement): void {
    $ref.textContent = count;
  }

  renderBtn({
    $container,
    action,
    text,
    type,
  }: {
    $container: HTMLElement;
    action: BtnAction;
    text: string;
    type: BtnType;
  }): void {
    const btnController = new BtnController({
      $container,
      action,
      text,
      type,
      onActionClick: this.onBtnClick,
    });

    btnController.init();
  }
}
