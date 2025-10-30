const gruForm = document.querySelector("#gruForm"); // Get your form element

gruForm.addEventListener("submit", function (e) {
  // Your custom logic here
  e.preventDefault(); // Prevent the default form submission behavior

  const formData = new FormData(gruForm);
  console.log(formData.entries());
  // Itera sobre os dados do formulário
  for (let [field, value] of formData.entries()) {
    console.log(field + ": " + value);
  }
});
