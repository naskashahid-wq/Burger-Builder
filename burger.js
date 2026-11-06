
let ingredients = {
  lettuce: 0,
  bacon: 0,
  cheese: 0,
  meat: 0,
};

let prices = {
  lettuce: 0.5,
  bacon: 0.7,
  cheese: 0.5,
  meat: 1.3,
};

let basePrice = 3.0;

let rows = document.querySelectorAll(".ingredient-row");

rows.forEach(function (row) {
  let name = row.querySelector("label").textContent.toLowerCase();

  let moreButton = row.querySelector(".more");
  let lessButton = row.querySelector(".less");

  moreButton.addEventListener("click", function () {
    ingredients[name]++;
    updateBurger();
  });

  lessButton.addEventListener("click", function () {
    if (ingredients[name] > 0) {
      ingredients[name]--;
    }

    updateBurger();
  });
});

function updateBurger() {
  let burger = document.getElementById("burger-ingredients");

  burger.innerHTML = "";

  let total = basePrice;
  let count = 0;

  for (let name in ingredients) {
    count += ingredients[name];
    total += ingredients[name] * prices[name];

    for (let i = 0; i < ingredients[name]; i++) {
      let item = document.createElement("div");

      item.classList.add("ingredient", name);
      burger.appendChild(item);
    }
  }

  if (count === 0) {
    let message = document.createElement("p");

    message.id = "empty-message";
    message.textContent = "No Ingredients Added";

    burger.appendChild(message);
  }

  document.getElementById("price").textContent = total.toFixed(2);

  rows.forEach(function (row) {
    let name = row.querySelector("label").textContent.toLowerCase();

    row.querySelector(".less").disabled = ingredients[name] === 0;
  });
}

document.getElementById("login").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Login page is not connected yet.");
});

document.querySelector(".signup").addEventListener("click", function () {
  let count = 0;

  for (let name in ingredients) {
    count += ingredients[name];
  }

  if (count === 0) {
    alert("Please add ingredients first!");
  } else {
    alert("Please sign up to continue your order.");
  }
});

updateBurger();

let signupButton = document.querySelector(".signup");
let signupForm = document.getElementById("signup-form");
let burgerSection = document.querySelector(".burger-section");
let controls = document.querySelector(".controls");

signupButton.addEventListener("click", function () {
  signupForm.style.display = "block";

  if (burgerSection) {
    burgerSection.style.display = "none";
  }

  if (controls) {
    controls.style.display = "none";
  }

  signupForm.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

document.getElementById("my-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  alert("Form submitted for: " + email);
});

document.getElementById("signin").addEventListener("click", function () {
  alert("Sign In page is not connected yet.");
});