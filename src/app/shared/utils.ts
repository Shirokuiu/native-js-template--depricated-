import { Place } from './enums';

export const render = (
  container: HTMLElement,
  component: Node | any,
  place: Place = Place.Beforeend
) => {
  switch (place) {
    case Place.Afterbegin:
      container.prepend(component);
      break;
    case Place.Beforeend:
      container.append(component);
      break;
  }
};

export const createElement = (template: string): Node | null => {
  const newElement: HTMLElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const unrender = (component: HTMLElement): void => {
  if (component) {
    component.remove();
  }
};
