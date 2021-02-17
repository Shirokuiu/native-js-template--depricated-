import { ViewComponent } from '../../../../core';

export default class CounterComponent extends ViewComponent {
  getTemplate(): string {
    return `<div class="counter">
      <h2 class="counter__title">Счетчик: <span class="counter__number"></span></h2>
      <div class="counter__btn-wrap"></div>
    </div>`;
  }
}
