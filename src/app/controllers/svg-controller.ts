import { render } from '../shared/utils';
import Svg from '../components/svg';
import { Place } from '../shared/enums';

export default class SvgController {
  private _container: HTMLElement;
  private _svg: Svg;

  constructor(container: HTMLElement) {
    this._container = container;
    this._svg = new Svg();
  }

  init(): void {
    render(this._container, this._svg.getElement(), Place.Afterbegin);
  }
}
