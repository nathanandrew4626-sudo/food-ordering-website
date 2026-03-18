document.getElementById("orderBtn").addEventListener("click", function () {
  alert("Welcome to the Food Ordering Website!");
});

const addButtons = document.querySelectorAll(".add-btn");
const cartMessage = document.getElementById("cartMessage");

addButtons.forEach(button => {
  button.addEventListener("click", function () {
    cartMessage.textContent = "Items added to cart successfully.";
  });
});
