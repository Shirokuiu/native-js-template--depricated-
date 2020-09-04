import { Place } from '../shared/enums';

export class DOM {
  static createElement(template: string): HTMLElement {
    const newElement: HTMLElement = document.createElement(`div`);
    newElement.innerHTML = template;
    return newElement.firstChild as HTMLElement;
  }

  static render(
    container: HTMLElement,
    element: HTMLElement,
    place: Place = Place.Beforeend
  ) {
    switch (place) {
      case Place.Afterbegin:
        container.prepend(element);
        break;
      case Place.Beforeend:
        container.append(element);
        break;
    }
  }

  static unRender(element: HTMLElement) {
    if (element) {
      element.remove();
    }
  }
}
