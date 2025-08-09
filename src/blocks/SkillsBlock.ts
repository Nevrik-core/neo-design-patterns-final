/**
 * Блок відображення навичок резюме
 */

import { Skills } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SkillsBlock implements IBlock {
  constructor(private d: Skills) {}

  render(): HTMLElement {
    const sec = document.createElement("section");
    sec.className = "section skills";
    sec.innerHTML = "<h2>Skills</h2>";

    const ul = document.createElement("ul");
    ul.className = "skills-list";

    Object.entries(this.d).forEach(([cat, skills]) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${cat}:</strong> ${skills.join(", ")}`;
      ul.appendChild(li);
    });

    sec.appendChild(ul);
    return sec;
  }
}
