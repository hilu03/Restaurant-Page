export function createContactDiv() {
  const div = document.createElement("div");
  div.classList.add("content-container");
  const html = 
  `
    <h1>Contact Us</h1>
    <div class="contact">
      <h2 class="contact-name">Mr. Gold</h2>
      <div class="info">
        <ul>
          <li class="position">Position: Manager</li>
          <li class="phone">Phone: 333-333-3333</li>
          <li class="mail">Email: golden@hilu.com</li>
        </ul>
      </div>
    </div>
    <div class="contact">
      <h2 class="contact-name">Ms. Milo</h2>
      <div class="info">
        <ul>
          <li class="position">Position: Chef</li>
          <li class="phone">Phone: 310-310-0310</li>
          <li class="mail">Email: milo@hilu.com</li>
        </ul>
      </div>
    </div>
    <div class="contact">
      <h2 class="contact-name">Mr. White</h2>
      <div class="info">
        <ul>
          <li class="position">Position: Waiter</li>
          <li class="phone">Phone: 333-333-3332</li>
          <li class="mail">Email: white@hilu.com</li>
        </ul>
      </div>
    </div>
  `;
  div.innerHTML = html;
  return div;
}