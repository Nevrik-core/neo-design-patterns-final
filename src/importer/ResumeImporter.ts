/**
 * Конкретна реалізація імпортера резюме
 * Наслідується від AbstractImporter і реалізує абстрактні методи
 */

import { AbstractImporter } from "./AbstractImporter";
import { ResumeModel } from "../models/ResumeModel";
import { BlockFactory } from "../blocks/BlockFactory";

export class ResumeImporter extends AbstractImporter<ResumeModel> {
  protected validate(): void {
    const o = this.raw as Record<string, unknown> | null;
    if (!o || typeof o !== "object") throw new Error("Неприпустимий формат JSON");

    const required = ["header", "summary", "experience", "education", "skills"];
    for (const k of required) {
      if (!(k in o)) throw new Error(`Відсутній обов’язковий блок: ${k}`);
    }
  }

  protected map(): ResumeModel {
    return this.raw as ResumeModel;
  }

  protected render(model: ResumeModel): void {
    const root = document.getElementById("resume-content")!;
    root.innerHTML = "";

    const factory = new BlockFactory();

    const order = ["header", "summary", "experience", "education", "skills"] as const;
    for (const t of order) {
      const block = factory.createBlock(t, model);
      root.appendChild(block.render());
    }
  }
}
