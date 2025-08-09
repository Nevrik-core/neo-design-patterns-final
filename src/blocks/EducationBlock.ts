/**
 * Блок відображення освіти в резюме
 */

import { Education } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class EducationBlock implements IBlock {
  constructor(private d: Education) {}

  render(): HTMLElement {
    const el = document.createElement("div");
    el.className = "education-item";
    el.innerHTML = `
      <p><strong>${this.d.degree}</strong> ${this.d.field}, ${this.d.institution} (${this.d.graduation})</p>
    `;
    return el;
  }
}
