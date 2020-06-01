import SvgController from './svg-controller';

export default class AppController {
  private _svgController: SvgController;

  constructor() {
    this._svgController = new SvgController(document.body);
  }

  init() {
    this._svgController.init();
  }
}
