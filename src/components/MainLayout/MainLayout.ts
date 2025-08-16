import { renderTipCalculator } from "../TipCalculator/TipCalculator";

export function renderMainLayout(): HTMLElement {
  const main = document.createElement("main");

  const header = document.createElement("header");

  const logo = document.createElement("img");
  logo.src = "/assets/images/logo.svg";
  logo.alt = "Tip Calculator logo";
  logo.width = 87;
  logo.height = 54;
  logo.className = "mx-auto mt-[50px] mb-10 lg:mt-0 lg:mb-22";

  header.appendChild(logo);
  main.appendChild(header);

  main.appendChild(renderTipCalculator());
  return main;
}
