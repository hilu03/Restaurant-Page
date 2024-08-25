import "./styles.css";
import { createHomeDiv } from "./home.js";
import { createMenuDiv } from "./menu.js";
import { createContactDiv } from "./contact.js";

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(createHomeDiv());

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

homeButton.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(createHomeDiv());
});

menuButton.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(createMenuDiv());
});

contactButton.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(createContactDiv());
});