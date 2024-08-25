export function createHomeDiv() {
  const div = document.createElement("div");
  div.classList.add("content-container");
  const html = 
  `
    <h1>Hilu's Vietnamese Breakfast Restaurant</h1>
    <div class="review-container">
      <div class="star">⭐⭐⭐⭐⭐</div>
      <div class="review">
        Hilu's Vietnamese Breakfast Restaurant offers a delightful start to the day with its authentic and flavorful dishes. The pho is aromatic and perfectly seasoned, while the banh mi is crispy and generously filled. The staff is friendly and attentive, creating a warm and inviting atmosphere. A must-visit spot for anyone looking to experience traditional Vietnamese morning cuisine.      </div>
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