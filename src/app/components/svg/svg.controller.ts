import { SvgTemplate } from './svg.template';
import { DOM } from '../../core';

export class SvgController {
  private svgTemplate = new SvgTemplate();

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    DOM.render(this.$container, this.svgTemplate.getElement());
  }
}
