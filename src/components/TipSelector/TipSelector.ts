import { calculator } from "../../state/calculator.store";
import { renderInput } from "../Input/input";
import { renderTipButton } from "../TipButton/TipButton";

export function renderTipSelector(tips: number[]): HTMLElement {
  const container = document.createElement("div");
  container.innerHTML = `
    <p class="mb-2 text-preset-5 text-fem-grey-500">Select Tip %</p>
  `;
  container.className = "";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "grid grid-cols-2 gap-4 sm:grid-cols-3";
  tips.forEach((tip) => {
    const button = renderTipButton(tip);
    buttonsContainer.appendChild(button);
  });

  const customTipInput = renderInput({
    name: "custom",
    placeholder: "0",
    textCenter: true,
  });
  customTipInput.addEventListener("valuechange", (e: any) => {
    if (e.detail.name === "tipPercent")
      calculator.setTipPercent(e.detail.value);
  });

  buttonsContainer.appendChild(customTipInput);

  container.appendChild(buttonsContainer);

  return container;
}
