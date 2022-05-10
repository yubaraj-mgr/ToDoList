// const form = document.querySelector(".form");
// const ul = document.querySelector(".wrapper");

// form.addEventListener("submit", add);

// function add(e) {
//   e.preventDefault();
//   const value = document.querySelector("#v").value;
//   const li = document.createElement("li");
//   li.append(document.createTextNode(value));
//   ul.append(li);
// }

const form = document.querySelector(".form");
const ul = document.querySelector(".wrapper");

// Adding event listener to form.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("#v");
  const li = document.createElement("li");
  li.append(document.createTextNode(inputValue.value));
  ul.append(li);
  const button = document.createElement("button");
  button.append(document.createTextNode("X"));
  li.append(button);
  button.addEventListener("click", (e) => {
    if (confirm("Are You Sure?")) {
      ul.removeChild(li);
    }
  });
  li.addEventListener("click", (e) => {
    li.classList.toggle("li-style");
  });
  inputValue.value = "";
});
