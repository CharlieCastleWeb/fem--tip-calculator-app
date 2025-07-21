import { renderTipCalculator } from "../TipCalculator/TipCalculator";

export function renderMainLayout(): HTMLElement {
  const main = document.createElement("main");

  const title = document.createElement("h1");
  // title.textContent = "Splitter";
  // title.className = "uppercase text-fem-grey-600";

  // Cambiar esto por una imagen con el logo ! ! !

  main.appendChild(title);

  main.appendChild(renderTipCalculator());
  return main;
}
