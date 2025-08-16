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
  buttonsContainer.appendChild(
    renderInput({
      name: "custom",
      placeholder: "Custom",
      textCenter: true,
    })
  );

  container.appendChild(buttonsContainer);

  return container;
}
