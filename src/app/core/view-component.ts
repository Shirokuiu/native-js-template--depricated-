import { View } from './view';

export abstract class ViewComponent {
  private element: HTMLElement | null = null;

  constructor() {
    if (new.target === ViewComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }
  }

  getElement(): HTMLElement {
    if (!this.element) {
      this.element = View.createElement(this.getTemplate()) as HTMLElement;
    }

    return this.element;
  }

  removeElement() {
    View.unRender(this.element as HTMLElement);
    this.element = null;
  }

  getTemplate(): string {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }
}
