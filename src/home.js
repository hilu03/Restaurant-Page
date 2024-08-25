export function createHomeDiv() {
  const div = document.createElement("div");
  div.classList.add("content-container");
  const html = 
  `
    <h1>Hilu's Vietnamese Restaurant Breakfast</h1>
    <div class="review-container">
      <div class="star">⭐⭐⭐⭐⭐</div>
      <div class="review">
        Clean restaurant and kitchen with proper tables to sit at. Truly Delicious food and reasonable portions. I've been there four times now and have always tried a new dish. The tamarind prawns were as good a taste as I could hope for. I also had a couple of good craft beers - a double IPA and a coconut based IPA. An easy place to get to in the old quarter, tucked near the end of a narrow street.
      </div>
      <div class="reviewer">- Lovely anonymous customer -</div>
    </div>
    <div class="hours-container">
      <div class="hours-title">Opening hours </div>
      <div class="hours">
        6am - 12pm every day.
      </div>
    </div>
    <div class="location-container">
      <div class="location-title">Location</div>
      <div>310 My Street, My District, Vietnam.</div>
    </div>
  `;
  div.innerHTML = html;
  return div;
}