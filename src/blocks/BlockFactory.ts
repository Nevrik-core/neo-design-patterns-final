/**
 * Патерн Factory Method (Фабричний метод)
 *
 * Клас BlockFactory відповідає за створення різних типів блоків резюме
 * залежно від типу, переданого як параметр.
 */

import {
  ResumeModel,
  Education,
  Experience,
  Skills,
} from "../models/ResumeModel";
import { HeaderBlock } from "./HeaderBlock";
import { SummaryBlock } from "./SummaryBlock";
import { ExperienceBlock } from "./ExperienceBlock";
import { EducationBlock } from "./EducationBlock";
import { SkillsBlock } from "./SkillsBlock";

export interface IBlock {
  render(): HTMLElement;
}

export type BlockType = "header" | "summary" | "experience" | "education" | "skills";

export class BlockFactory {
  createBlock(type: BlockType, m: ResumeModel): IBlock {
    switch (type) {
      case "header":
        return new HeaderBlock(m.header);
      case "summary":
        return new SummaryBlock(m.summary);
      case "skills":
        return new SkillsBlock(m.skills);

      case "experience":
        return {
          render() {
            const sec = document.createElement("section");
            sec.className = "section experience";
            sec.innerHTML = "<h2>Experience</h2>";
            m.experience.forEach((e) => sec.appendChild(new ExperienceBlock(e).render()));
            return sec;
          },
        };

      case "education":
        return {
          render() {
            const sec = document.createElement("section");
            sec.className = "section education";
            sec.innerHTML = "<h2>Education</h2>";
            m.education.forEach((ed) => sec.appendChild(new EducationBlock(ed).render()));
            return sec;
          },
        };

      default:
        throw new Error(`Unknown block type: ${type}`);
    }
  }
}