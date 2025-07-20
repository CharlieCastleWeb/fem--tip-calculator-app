import { renderInput } from "../Input/input";
import { renderTipButton } from "../TipButton/TipButton";
import { renderTipCard } from "../TipCard/TipCard";
import template from "./MainLayout.html?raw";

export function renderMainLayout(): HTMLElement {
  const main = document.createElement("main");
  main.classList.add("main-layout");
  main.innerHTML = template;
  main.appendChild(renderTipButton("15%"));
  main.appendChild(
    renderInput(
      "tip",
      "/assets/images/icon-person.svg",
      "Person Icon",
      "Prueba",
      "error"
    )
  );
  main.appendChild(renderTipCard());
  return main;
}
