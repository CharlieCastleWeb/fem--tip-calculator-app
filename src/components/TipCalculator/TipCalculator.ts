import { renderInput } from "../Input/input";
import { renderTipCard } from "../TipCard/TipCard";
import { renderTipSelector } from "../TipSelector/TipSelector";

export function renderTipCalculator(): HTMLElement {
  const container = document.createElement("div");
  container.className =
    "rounded-3xl bg-fem-white px-6 py-8 flex flex-col gap-8";

  const billSection = document.createElement("section");
  billSection.appendChild(
    renderInput({
      name: "bill",
      labelText: "Bill",
      iconSrc: "assets/images/icon-dollar.svg",
      iconAlt: "Dollar Icon",
    })
  );
  container.appendChild(billSection);

  container.appendChild(renderTipSelector([5, 10, 15, 25, 50]));

  const peopleSection = document.createElement("section");
  peopleSection.appendChild(
    renderInput({
      name: "people",
      labelText: "People",
      iconSrc: "assets/images/icon-person.svg",
      iconAlt: "Person Icon",
    })
  );
  container.appendChild(peopleSection);

  const tipCardSection = document.createElement("section");
  tipCardSection.appendChild(renderTipCard());
  container.appendChild(tipCardSection);

  return container;
}
