import { formatMoney } from "../../services/format";
import { calculator } from "../../state/calculator.store";
import { renderInput } from "../Input/input";
import { renderTipButton } from "../TipButton/TipButton";

export function renderTipSelector(tips: number[]): HTMLElement {
  const container = document.createElement("div");
  container.innerHTML = `
    <p class="mb-2 text-preset-5 text-fem-grey-500">Select Tip %</p>
  `;
  container.className = "";

  const customTipInput = renderInput({
    name: "customTipPercent",
    placeholder: "Custom",
    textCenter: true,
    bind: "tipPercent",
  });
  const customInputEl = customTipInput.querySelector(
    "input"
  ) as HTMLInputElement | null;
  customTipInput.addEventListener("valuechange", (e: any) => {
    if (e.detail.name === "customTipPercent")
      calculator.setTipPercent(e.detail.value);
  });

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "grid grid-cols-2 gap-4 sm:grid-cols-3";
  tips.forEach((tip) => {
    const tipButton = renderTipButton(tip);
    tipButton.addEventListener("valuechange", (e: any) => {
      calculator.setTipPercent(e.detail.value);
      if (customInputEl) {
        customInputEl.value = "0";
      }
    });
    buttonsContainer.appendChild(tipButton);
  });

  buttonsContainer.appendChild(customTipInput);

  container.appendChild(buttonsContainer);

  return container;
}
