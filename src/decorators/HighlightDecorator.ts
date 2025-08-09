/**
 * Патерн Decorator (Декоратор)
 *
 * Клас для додавання виділення до блоків резюме.
 * Декорує об'єкти типу IBlock, додаючи їм нову функціональність
 * без зміни їх внутрішньої структури.
 */

import { IBlock } from "../blocks/BlockFactory";

export class HighlightDecorator implements IBlock {
  constructor(private wrapped: IBlock) {}

  render(): HTMLElement {
    const el = this.wrapped.render();
    el.classList.add("highlight");
    return el;
  }
}
