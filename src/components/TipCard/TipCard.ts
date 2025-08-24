import {
  tipPerPerson,
  totalPerPerson,
} from "../../services/calculator.selectors";
import { calculator } from "../../state/calculator.store";

export function renderTipCard(): HTMLElement {
  const tipCard = document.createElement("div");
  tipCard.className =
    "bg-fem-green-900 p-6 rounded-2xl sm:p-12 lg:w-[413px] lg:px-10";

  tipCard.innerHTML = `
    <div class="py-1 flex justify-between items-center">
      <div>
        <p class="text-preset-5 text-fem-white">Tip Amount</p>
        <p class="text-preset-6 text-fem-grey-400">/ person</p>
      </div>
      <div>
        <p id="tipAmount" class="text-preset-2 text-fem-green-400 sm:text-preset-1">$0</p>
      </div>
    </div>
    <div class="flex justify-between items-center mt-5 sm:mt-8 lg:mt-10">
      <div>
        <p class="text-preset-5 text-fem-white">Total</p>
        <p class="text-preset-6 text-fem-grey-400">/ person</p>
      </div>
      <div>
        <p id="totalAmount" class="text-preset-2 text-fem-green-400 sm:text-preset-1">$0</p>
      </div>
    </div>
    </div>
    <button
      id="resetBtn"
      class="
          mt-8 w-full bg-fem-green-400 text-preset-4 text-fem-green-900 rounded
          px-4 pt-2 pb-4 disabled:bg-fem-green-750 disabled:text-fem-green-800
          active:bg-fem-green-200 sm:mt-6 lg:mt-32
        "
    >
      RESET
    </button>
  `;

  const tipAmountEl = tipCard.querySelector<HTMLParagraphElement>("#tipAmount");
  const totalAmountEl =
    tipCard.querySelector<HTMLParagraphElement>("#totalAmount");
  const resetBtn = tipCard.querySelector<HTMLButtonElement>("#resetBtn");

  calculator.subscribe((state) => {
    const tip = tipPerPerson(state).toFixed(2);
    const total = totalPerPerson(state).toFixed(2);

    tipAmountEl!.textContent = `$${tip}`;
    totalAmountEl!.textContent = `$${total}`;

    const hasValues =
      state.bill > 0 || state.tipPercent > 0 || state.people > 0;
    resetBtn!.disabled = !hasValues;
  });

  resetBtn!.addEventListener("click", () => {
    calculator.reset();
  });

  return tipCard;
}
