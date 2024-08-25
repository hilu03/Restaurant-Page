export function createContactDiv() {
  const div = document.createElement("div");
  div.classList.add("content-container");
  const html = 
  `
    <h1>Contact Us</h1>
    <div class="contact">
      <div class="contact-name">Mr. Gold</div>
      <div class="info">
        <div class="position">Manager</div>
        <div class="phone">333-333-3333</div>
        <div class="mail">golden@hilu.com</div>
      </div>
    </div>
    <div class="contact">
      <div class="contact-name">Ms. Milo</div>
      <div class="info">
        <div class="position">Chef</div>
        <div class="phone">310-310-0310</div>
        <div class="mail">milo@hilu.com</div>
      </div>
    </div>
    <div class="contact">
      <div class="contact-name">Mr. White</div>
      <div class="info">
        <div class="position">Waiter</div>
        <div class="phone">333-333-3332</div>
        <div class="mail">white@hilu.com</div>
      </div>
    </div>
  `;
  div.innerHTML = html;
  return div;
}