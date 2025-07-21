export function renderTipButton(tip: number): HTMLElement {
  const button = document.createElement("button");
  button.className = `
    h-12 bg-fem-green-900 text-fem-grey-50 text-preset-3 rounded cursor-pointer transition-all duration-300 ease-in-out
    px-4 py-2
    hover:bg-fem-green-400 hover:text-fem-green-900
    focus:bg-fem-green-400 focus:text-fem-green-900 focus:outline-0
    active:bg-fem-green-200 active:text-fem-green-900
  `;
  button.textContent = `${tip}%`;
  button.dataset.value = `${tip}%`;
  return button;
}
