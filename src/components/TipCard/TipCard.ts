export function renderTipCard(
  tipAmount: number = 0,
  total: number = 0
): HTMLElement {
  const tipCard = document.createElement("div");
  tipCard.className = "bg-fem-green-900 p-6 rounded-2xl";
  tipCard.innerHTML = ` 
    <div class="flex justify-between items-center">
      <div>
        <p class="text-preset-5 text-fem-white">Tip Amount</p>
        <p class="text-preset-6 text-fem-grey-400">/ person</p>
      </div>
      <div>
        <p class="text-preset-2 text-fem-green-400 sm:text-preset-1">$${tipAmount}</p>
      </div>
    </div>
    <div class="flex justify-between items-center mt-6">
      <div>
        <p class="text-preset-5 text-fem-white">Total</p>
        <p class="text-preset-6 text-fem-grey-400">/ person</p>
      </div>
      <div>
        <p class="text-preset-2 text-fem-green-400 sm:text-preset-1">$${total}</p>
      </div>
    </div>
    </div>
    <button 
      class="
          mt-8 w-full bg-fem-green-400 text-preset-4 text-fem-green-900 rounded 
          px-4 py-2 disabled:bg-fem-green-750 disabled:text-fem-green-800
          active:bg-fem-green-200
        "
    >
      RESET
    </button>
  `;
  return tipCard;
}
