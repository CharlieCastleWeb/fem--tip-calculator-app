import { renderTipButton } from "../TipButton/TipButton";
import template from "./MainLayout.html?raw";

export function renderMainLayout(): HTMLElement {
  const main = document.createElement("main");
  main.classList.add("main-layout");
  main.innerHTML = template;
  main.appendChild(renderTipButton("15%"));
  return main;
}
