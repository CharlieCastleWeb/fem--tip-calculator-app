import { formatMoney } from "../../services/format";
import { calculator } from "../../state/calculator.store";
import { renderInput } from "../Input/input";
import { renderTipCard } from "../TipCard/TipCard";
import { renderTipSelector } from "../TipSelector/TipSelector";

export function renderTipCalculator(): HTMLElement {
  const container = document.createElement("div");
  container.className = `
    rounded-3xl flex flex-col gap-8 bg-fem-white mx-auto px-6 py-8 
    max-w-[608px] 
    sm:px-19 sm:py-13 sm:gap-10 
    lg:max-w-[920px] lg:flex-row 
    lg:px-10 lg:py-8 lg:gap-12
  `;

  const inputPanel = document.createElement("section");
  inputPanel.className =
    "pt-0.5 mx-2 flex flex-col gap-8 sm:mx-0 sm:gap-6 lg:pt-4 lg:gap-10";
  const billSection = document.createElement("div");

  const billInput = renderInput({
    name: "bill",
    labelText: "Bill",
    iconSrc: "assets/images/icon-dollar.svg",
    iconAlt: "Dollar Icon",
    bind: "bill",
    format: (n) => n.toFixed(2),
  });
  billInput.addEventListener("valuechange", (e: any) => {
    if (e.detail.name === "bill") calculator.setBill(e.detail.value);
  });
  billSection.appendChild(billInput);
  inputPanel.appendChild(billSection);

  inputPanel.appendChild(renderTipSelector([5, 10, 15, 25, 50]));

  const peopleSection = document.createElement("div");
  const peopleInput = renderInput({
    name: "people",
    labelText: "Number of People",
    iconSrc: "assets/images/icon-person.svg",
    iconAlt: "Person Icon",
    bind: "people",
    format: (n) => String(n ?? 0),
  });
  peopleInput.addEventListener("valuechange", (e: any) => {
    if (e.detail.name === "people") calculator.setPeople(e.detail.value);
  });
  peopleSection.appendChild(peopleInput);
  inputPanel.appendChild(peopleSection);

  container.appendChild(inputPanel);

  const outputPanel = document.createElement("div");
  outputPanel.className = "";
  outputPanel.appendChild(renderTipCard());
  container.appendChild(outputPanel);

  return container;
}
