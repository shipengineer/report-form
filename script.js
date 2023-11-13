const instrumets = {
  instruments: [
    {
      id: 1,
      "instrument-name": "Лазерный трекер API Radian Plus R-80",
      "instrument-number": "70681",
      "instrument-certificate": "С-М/19-12-2022/211174153",
    },
    {
      id: 2,
      "instrument-name": "Сканер лазерный Leica RTC360",
      "instrument-number": "2984274",
      "instrument-certificate": "С-ДЭМ/19-09-2023/279399049",
    },
    {
      id: 3,
      "instrument-name": "Тахеометр Leica TS60 I",
      "instrument-number": "890213",
      "instrument-certificate": "С-Т/14-12-2022/208731450",
    },
    {
      id: 4,
      "instrument-name": "Тахеометр Sokkia NET1AXII",
      "instrument-number": " КН0569",
      "instrument-certificate": "С-ДЭМ/30-08-2023/274062460",
    },
    {
      id: 5,
      "instrument-name": "Тахеометр SOUTH N3",
      "instrument-number": "287748",
      "instrument-certificate": "С-ДЭМ/02-12-2022/205769401",
    },
    {
      id: 6,
      "instrument-name": "Нивелир Leica NA324 ",
      "instrument-number": "941324337937",
      "instrument-certificate": "С-ДЭМ/30-08-2023/274062459",
    },
    {
      id: 7,
      "instrument-name": "Лазерный дальномер Leica DISTO X3",
      "instrument-number": "1610930131",
      "instrument-certificate": "С-EBE/26-09-2022/188789417",
    },
    {
      id: 8,
      "instrument-name": "Рейка нивелирная RGK TS-5",
      "instrument-number": "STS50003",
      "instrument-certificate": "С-СП/21-03-2023/232461132",
    },
  ],
  year: 2023,
};
function render() {
  {
    // let responce = await fetch("./data.json");
    let iData = instrumets;

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

// _________________________________________________________________________
function addNewPage() {}
