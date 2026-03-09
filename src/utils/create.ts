export function create(el: string, classes?: string): HTMLElement {
  const element = document.createElement(el);
  if (classes) element.className = classes;
  return element;
}
