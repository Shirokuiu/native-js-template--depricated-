import BtnComponent, { BtnProps } from './btn.component';
import { View } from '../../../../core';

export interface BtnControllerProps extends BtnProps {
  $container: HTMLElement;
  action: string;
  onActionClick: (action: string) => void;
}

export default class BtnController {
  private btnComponent: BtnComponent;

  constructor(private readonly props: BtnControllerProps) {}

  init(): void {
    const { $container, action, onActionClick = () => undefined } = this.props;
    this.btnComponent = new BtnComponent(this.props);

    const $btn = this.btnComponent.getElement();

    View.render($container, this.btnComponent.getElement());
    $btn.addEventListener('click', () => {
      onActionClick(action);
    });
  }
}
