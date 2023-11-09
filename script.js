async function render() {
  {
    let responce = await fetch("./data.json");
    let iData = await responce.json();

    const instrumentsDatalist = document.querySelector("#instruments");
    const iInstruments = iData.instruments;
    iInstruments.forEach((element) => {
      const newOption = document.createElement("option");
      newOption.textContent = element["instrument-name"];
      instrumentsDatalist.append(newOption);
    });
    console.log(iInstruments);
    const year = document.querySelector("#year");
    year.textContent = iData.year;
    const table = document.querySelector(".instruments");
    let requiredInstrument;
    table.addEventListener("change", (e) => {
      requiredInstrument = null;
      const target = e.target;
      iInstruments.map((elem) => {
        if (elem["instrument-name"] === target.value) {
          requiredInstrument = elem;
        }
      });
      const tdOfRequiredInstrument = target.parentNode;
      const tdSiblingNumber = tdOfRequiredInstrument.nextSibling.nextSibling;
      console.log(tdSiblingNumber);
      const SiblingSiblingCertificate = tdSiblingNumber.nextSibling.nextSibling;
      console.log(SiblingSiblingCertificate);
      tdSiblingNumber.textContent = requiredInstrument["instrument-number"];
      SiblingSiblingCertificate.textContent =
        requiredInstrument["instrument-certificate"];
    });
  }
}
async function toChange() {
  await render();
}
toChange();

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

// _________________________________________________________________________
