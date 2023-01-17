const ratingsDisplay = document.querySelector(".rating-component");
const form = document.querySelector(".form-container");
const userSelection = document.querySelector(".you-selected-paragraph");
const thankYouDisplay = document.querySelector(".thankyou-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = form.rating.value;
  userSelection.textContent = `You selected ${rating} out of 5`;
  ratingsDisplay.classList.add("hidden");
  thankYouDisplay.classList.remove("hidden");

  document.querySelector(".thankyou-container").removeAttribute("hidden");
});

document.getElementsByName("rating").forEach((item) => {
  item.onchange = function () {
    document.getElementById("btn-submit").removeAttribute("disabled");
  };
});
