import { renderMainLayout } from "./components/MainLayout/MainLayout";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.appendChild(renderMainLayout());
}
