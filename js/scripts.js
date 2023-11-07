function handleForm(event) {
  event.preventDefault();
  const selections = document.querySelectorAll("input:checked");
  const selectionsArray = Array.from(selections);

  const resultHeading = document.createElement("h2");
  resultHeading.append("Here are the flavors you selected, you chose......Poorly :(");
  document.body.append(resultHeading);

  selectionsArray.forEach(function (element) {
    const ul = document.createElement("ul");
    ul.append(element.value);
    document.body.append(ul);
  });
  const form = document.getElementById('iceCreamMenu');
  form.setAttribute("class", "hidden");
}

window.addEventListener("load", function () {
  document.querySelector("form#iceCreamMenu").addEventListener("submit", handleForm);

});

