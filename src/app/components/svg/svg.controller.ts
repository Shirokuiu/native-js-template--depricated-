import { SvgView } from './svg.view';
import { View } from '../../core';

export class SvgController {
  private svgView = new SvgView();

  constructor(private readonly $containerRef: HTMLElement) {}

  init(): void {
    View.render(this.$containerRef, this.svgView.getElement());
  }
}
