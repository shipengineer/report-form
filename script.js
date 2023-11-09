async function render() {
  {
    let responce = await fetch("./data.json");
    let iData = await responce.json();

    const instrumentsDatalist = document.querySelector("#instruments");
    console.log(iData);
    const year = document.querySelector("#year");
    year.textContent = iData.year;
  }
}
render();
// _________________________________________________________________________
const check_1 = document.querySelector("#full-measure");
const check_2 = document.querySelector("#acceptance");
const check_3 = document.querySelector("#to-correct-required");
document.querySelector(".check-boxes").addEventListener("change", (e) => {
  const target = e.target;
  if (target.checked === true) {
    target.parentNode.setAttribute("style", "text-decoration:none");
  } else {
    target.parentNode.setAttribute("style", "text-decoration:line-through 2px");
  }
});
// _________________________________________________________________________
const superOrder = document.querySelector("#super-order");
const superOrderNumber = document.querySelector("#super-order-number");
superOrderNumber.addEventListener("input", (e) => {
  superOrder.textContent = superOrderNumber.value;
});
// _________________________________________________________________________
const other = document.querySelector("#other");
const otherText = document.querySelector("#other-text");
other.addEventListener("change", () => {
  if (other.checked === true) {
    otherText.style = "display:block";
    document.querySelector("#stage-select").style = "display:none";
  } else {
    otherText.style = "display:none";
    document.querySelector("#stage-select").style = "display:block";
  }
});
