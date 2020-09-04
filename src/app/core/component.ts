import { DOM } from './dom';

export abstract class Component {
  private element: HTMLElement | null = null;

  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }
  }

  getElement(): HTMLElement {
    if (!this.element) {
      this.element = DOM.createElement(this.getTemplate()) as HTMLElement;
    }

    return this.element;
  }

  removeElement() {
    DOM.unRender(this.element as HTMLElement);
    this.element = null;
  }

  getTemplate(): string {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }
}
