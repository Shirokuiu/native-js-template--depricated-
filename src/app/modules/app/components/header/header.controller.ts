import { View } from '../../../../core';
import HeaderComponent from './header.component';
import { AppStateService } from '../../services';

export default class HeaderController {
  private headerComponent: HeaderComponent;
  private $totalCount: HTMLElement;

  constructor(
    private readonly $container: HTMLElement,
    private readonly appStateService: AppStateService
  ) {}

  init(): void {
    this.headerComponent = new HeaderComponent({
      totalCount: this.appStateService.totalCount,
    });
    View.render(this.$container, this.headerComponent.getElement());
    this.$totalCount = this.$container.querySelector('.header__total-count span');

    this.appStateService.onTotalCountEmit.subscribe((totalCount: number) => {
      this.$totalCount.textContent = totalCount.toString();
    });
  }
}
