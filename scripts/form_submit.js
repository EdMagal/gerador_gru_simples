const gruForm = document.querySelector("#gruForm"); // Get your form element

gruForm.addEventListener("submit", function (e) {
  // Your custom logic here
  e.preventDefault(); // Prevent the default form submission behavior
  console.log(new FormData().getAll());
});
