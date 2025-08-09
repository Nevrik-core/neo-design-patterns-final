/**
 * Патерн Composite (Компоновщик)
 *
 * Блок досвіду роботи, який містить дочірні блоки проєктів
 */

import { Experience } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";
import { ProjectBlock } from "./ProjectBlock";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ExperienceBlock implements IBlock {
  constructor(private d: Experience) {}

  render(): HTMLElement {
    const item = document.createElement("div");
    item.className = "experience-item";
    item.innerHTML = `
      <p><strong>${this.d.position}</strong> at <em>${this.d.company}</em> (${this.d.start} – ${this.d.end})</p>
    `;

    this.d.projects.forEach((p) => {
      let block: IBlock = new ProjectBlock(p);
      if (p.isRecent) block = new HighlightDecorator(block);
      item.appendChild(block.render());
    });

    return item;
  }
}
