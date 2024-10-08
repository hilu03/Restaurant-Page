import milkCoffee from './images/iced-milk-coffee.jpg';
import eggCoffee from './images/egg-coffee.jpg';
import pho from './images/pho.jpeg';
import banhmi from './images/banh-mi.jpg';
import myquang from './images/my-quang.png';

export function createMenuDiv() {
  const div = document.createElement("div");
  div.classList.add("content-container");
  div.classList.add("menu");
  const html = 
  `
    <h1>Menu</h1>
    <h2>☕Beverages</h2>
    <div class="dish">
      <div class="left-card">
        <h3 class="dish-name">Iced milk coffee</h3>
        <div class="description">
          Vietnam's iced milk coffee is made by letting ground coffee slowly drip through a filter into a glass filled with sweetened condensed milk and ice. The blend of flavours, mixing the bold bitterness of coffee with the rich sweetness of condensed milk, is what makes iced milk coffee a hit with coffee lovers.
        </div>
        <div class="price">Price: $1</div>
      </div>
      <div class="img-container">
        <img src=${milkCoffee}>
      </div>
    </div>
    <div class="dish">
      <div class="left-card">
        <h3 class="dish-name">Egg coffee</h3>
        <div class="description">
          Served in small cups, Vietnamese egg coffee offers a sensory experience, kept warm by a bowl of hot water for that comforting touch. With a careful balance of ingredients, any hint of egginess is toned down, resulting in a brew that's indulgent and captivating.        
        </div>
        <div class="price">Price: $1.5</div>
      </div>
      <div class="img-container">
        <img src=${eggCoffee}>
      </div>
    </div>
    <h2>🍽️Main Dishes</h2>
    <div class="dish">
      <div class="left-card">
        <h3 class="dish-name">Pho (Noodle Soup)</h3>
        <div class="description">
          Pho is the most popular breakfast dish in Vietnam, consisting of tender rice noodles, beef or chicken slices, and rich bone broth accompanied by aromatic fresh herbs.        
        </div>
        <div class="price">Price: $2</div>
      </div>
      <div class="img-container">
        <img src=${pho}>
      </div>
    </div>
    <div class="dish">
      <div class="left-card">
        <h3 class="dish-name">Banh Mi (Vietnamese bread)</h3>
        <div class="description">
          Banh mi is a prominent Vietnamese breakfast item, featuring a yellow bread crust filled with fragrant meat, green veggies, refreshing cucumber slices, and carrot threads.       
        </div>
        <div class="price">Price: $1</div>
      </div>
      <div class="img-container">
        <img src=${banhmi}>
      </div>
    </div>
    <div class="dish">
      <div class="left-card">
        <h3 class="dish-name">Mi Quang</h3>
        <div class="description">
          A beloved traditional Vietnamese breakfast food, Mi Quang consists of turmeric-infused noodles, shrimp, pork, herbs, peanuts, and crispy rice crackers.       
        </div>
        <div class="price">Price: $1.2</div>
      </div>
      <div class="img-container">
        <img src=${myquang}>
      </div>
    </div>
  `;
  div.innerHTML = html;
  return div;
}