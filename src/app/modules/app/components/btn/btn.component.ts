import { ViewComponent } from '../../../../core';

export enum BtnType {
  Button = 'button',
  Submit = 'submit',
}

export interface BtnProps {
  type?: BtnType;
  text?: string;
}

export default class BtnComponent extends ViewComponent {
  constructor(private readonly props: BtnProps) {
    super();
  }

  getTemplate(): string {
    const { type = 'button', text = 'Кнопка' } = this.props;

    return `<button class="btn" type=${type} data-action="inc">${text}</button>`;
  }
}
