export function get<T extends Element = Element>(target: string): T | null {
  return document.querySelector<T>(target);
}
