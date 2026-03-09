export function set(element: Element | Element[], target: Element): void {
  if (Array.isArray(element)) {
    element.forEach((el) => target.appendChild(el));
  } else target.appendChild(element);
}
