import { renderMainLayout } from "./components/MainLayout/MainLayout";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  const appClasses = [
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "h-dvh",
  ];
  app.classList.add(...appClasses);
  app.appendChild(renderMainLayout());
}
