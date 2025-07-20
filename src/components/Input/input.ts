export function renderInput(
  name: string,
  iconSrc: string,
  iconAlt: string,
  labelText: string,
  errorText?: string
): HTMLElement {
  const container = document.createElement("div");
  container.className = "flex flex-col gap-2";
  container.innerHTML = `
  <div class="flex justify-between items-center">
    <label for="${name}" class="text-preset-5 text-fem-grey-500">${labelText}</label>
    <span class="text-preset-5 text-fem-orange-400">${errorText ?? ""}</span>
  </div>
  <div class="relative">
    <span class="absolute inset-y-0 left-4 flex items-center">
      <img src="${iconSrc}" alt="${iconAlt}" />
    </span>
    <input 
      type="number" 
      id="${name}"
      name="${name}"
      aria-describedby="${name}-error"
      placeholder="0"
      class=  "w-full bg-fem-grey-50 text-right px-4 py-2 rounded text-preset-3 text-fem-green-900 h-12
              focus:outline-2 focus:outline-fem-green-400" 
    />
  </div>
  `;
  return container;
}
