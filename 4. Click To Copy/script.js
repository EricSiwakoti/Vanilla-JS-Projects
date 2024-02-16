const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

const copyText = (e) => {
  e.preventDefault();
  content.select();
  content.setSelectionRange(
    0,
    99999
  ); /*For mobile devices that don't fully support select() method*/
  navigator.clipboard.writeText(content.value);
  btn.textContent = "Copied!";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 2000);
};

btn.addEventListener("click", copyText);
