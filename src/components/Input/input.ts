interface RenderInputOptions {
  name: string;
  labelText?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  errorText?: string;
  textCenter?: boolean;
}

export function renderInput(options: RenderInputOptions): HTMLElement {
  const {
    name,
    labelText,
    placeholder = "0",
    iconSrc,
    iconAlt,
    errorText,
    textCenter = false,
  } = options;

  const container = document.createElement("div");
  container.className = "flex flex-col gap-2";

  if (labelText || errorText) {
    const inputHeader = document.createElement("div");
    inputHeader.className = "flex justify-between items-center";
    if (labelText) {
      const label = document.createElement("label");
      label.textContent = labelText;
      label.className = "text-preset-5 text-fem-grey-500";
      label.setAttribute("for", name);
      inputHeader.appendChild(label);
    }
    if (errorText) {
      const errorSpan = document.createElement("span");
      errorSpan.className = "text-preset-5 text-fem-orange-400";
      errorSpan.textContent = errorText;
      inputHeader.appendChild(errorSpan);
    }
    container.appendChild(inputHeader);
  }

  const inputContainer = document.createElement("div");
  inputContainer.className = "relative";
  const input = document.createElement("input");
  input.type = "number";
  input.id = name;
  input.name = name;
  input.setAttribute("aria-describedby", `${name}-error`);
  input.placeholder = placeholder ?? "";
  input.className = `w-full bg-fem-grey-50 text-right px-4 py-2 rounded text-preset-3 text-fem-green-900 h-12
                    focus:outline-2 focus:outline-fem-green-400`;
  if (textCenter) input.classList.add("text-center", "placeholder:text-center");
  inputContainer.appendChild(input);
  container.appendChild(inputContainer);

  if (iconSrc) {
    const logoSpan = document.createElement("span");
    logoSpan.className = "absolute inset-y-0 left-4 flex items-center";
    const logoImage = document.createElement("img");
    logoImage.src = iconSrc;
    logoImage.alt = iconAlt ?? "";
    logoSpan.appendChild(logoImage);
    inputContainer.appendChild(logoSpan);
  }

  return container;
}
