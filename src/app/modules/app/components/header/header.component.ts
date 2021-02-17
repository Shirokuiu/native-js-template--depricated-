import { ViewComponent } from '../../../../core';

export interface HeaderProps {
  totalCount: number;
}

export default class HeaderComponent extends ViewComponent {
  constructor(private readonly props: HeaderProps = { totalCount: 0 }) {
    super();
  }

  getTemplate(): string {
    const { totalCount = 0 } = this.props;

    return `<header class="header">
        <div class="header__title-wrap">
          <h1 class="header__title">Заголовок</h1>
          <p class="header__total-count">Итого: <span>${totalCount}</span></p>
        </div>
        <hr>
      </header>`;
  }
}
