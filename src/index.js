import "./styles.css";
import { createHomeDiv } from "./home.js";
import { createMenuDiv } from "./menu.js";
import { createContactDiv } from "./contact.js";

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(createHomeDiv());

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

homeButton.classList.add("chosen");
homeButton.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(createHomeDiv());
  homeButton.classList.add("chosen");
  menuButton.classList.remove("chosen");
  contactButton.classList.remove("chosen");
});

menuButton.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(createMenuDiv());
  menuButton.classList.add("chosen");
  homeButton.classList.remove("chosen");
  contactButton.classList.remove("chosen");
});

contactButton.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(createContactDiv());
  contactButton.classList.add("chosen");
  menuButton.classList.remove("chosen");
  homeButton.classList.remove("chosen");
});