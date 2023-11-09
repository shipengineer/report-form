async function render() {
  {
    let responce = await fetch("./data.json");
    let iData = responce.json();

    const instrumentsDatalist = document.querySelector("#instruments");
    console.log(iData);
    const year = document.querySelector("#year");
    year.textContent = iData.year;
  }
}

const check_1 = document.querySelector("#full-measure");
const check_2 = document.querySelector("#acceptance");
const check_3 = document.querySelector("#to-correct-required");
document.addEventListener("change", (e) => {
  const target = e.target;
  if (target.checked === true) {
    target.parentNode.setAttribute("style", "text-decoration:none");
  } else {
    target.parentNode.setAttribute("style", "text-decoration:line-through 2px");
  }
});

render();
