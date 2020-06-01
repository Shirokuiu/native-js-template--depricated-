import { createElement } from '../shared/utils';

export default class Component {
  private _element: ChildNode | null;

  constructor() {
    this._element = null;
  }

  set element(value: null) {
    this._element = value;
  }

  getElement(): ChildNode | null {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement(): void {
    this.element = null;
  }

  getTemplate(): string {
    throw Error(`Abstract method not implemented`);
  }
}
