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
document.getElementById("report-date").value = new Date();
document.getElementById("sign-date").value = new Date();
const picsInPages = {};
function render() {
  {
    //--------------------------------------------------------------
    document.getElementById("report-number").value = store.dataset.reportNumber
      ? store.dataset.reportNumber
      : "";

    document.getElementById("super-order-number").value = store.dataset
      .reportNumber
      ? store.dataset.superOrderNumber
      : "";
    document.getElementById("super-order").value = store.dataset.reportNumber
      ? store.dataset.superOrderNumber
      : "";
    console.log(store.dataset.reportDate);
    document.getElementById("report-date").value = store.dataset.reportNumber
      ? store.dataset.reportDate
      : "";
    document.getElementById("order-number").value = store.dataset.reportNumber
      ? store.dataset.orderNumber
      : "";
    document.getElementById("order-date").value = store.dataset.orderDate
      ? store.dataset.orderDate
      : "";
    document.getElementById("receipt-number").value = store.dataset.reportNumber
      ? store.dataset.receiptNumber
      : "";
    document.getElementById("receipt-date").value = store.dataset.receiptDate
      ? store.dataset.receiptDate
      : "";
    document.getElementById("order-object").value = store.dataset.reportNumber
      ? store.dataset.orderObject
      : "";
    document.getElementById("stage-select").value = store.dataset.reportNumber
      ? store.dataset.stage
      : "";
    document.getElementById("other-text").value = store.dataset.reportNumber
      ? store.dataset.otherText
      : "";
    document.getElementById("measure-place").value = store.dataset.reportNumber
      ? store.dataset.measurePlace
      : "";
    document.getElementById("measure-date").value = store.dataset.measureDate
      ? store.dataset.measureDate
      : "";

    document.getElementById("first-sorce").value = store.dataset.reportNumber
      ? store.dataset.firstSource
      : "";
    document.getElementById("second-sorce").value = store.dataset.reportNumber
      ? store.dataset.secondSource
      : "";
    document.getElementById("third-sorce").value = store.dataset.reportNumber
      ? store.dataset.thirdSource
      : "";

    document.getElementById("first-instrument").value = store.dataset
      .reportNumber
      ? store.dataset.firstInstrument
      : "";

    document.getElementById("second-instrument").value = store.dataset
      .reportNumber
      ? store.dataset.secondInstrument
      : "";

    document.getElementById("third-instrument").value = store.dataset
      .reportNumber
      ? store.dataset.thirdInstrument
      : "";
    document.getElementById("conclusion").value = store.dataset.reportNumber
      ? store.dataset.conclusion
      : "";
    document.getElementById("remarks").value = store.dataset.reportNumber
      ? store.dataset.remarks
      : "";
    document.getElementById("full-measure").value = store.dataset.reportNumber
      ? store.dataset.fullMeashure
      : "";
    document.getElementById("acceptance").value = store.dataset.reportNumber
      ? store.dataset.acceptance
      : "";
    document.getElementById("to-correct-required").value = store.dataset
      .reportNumber
      ? store.dataset.toCorrectrequired
      : "";
    document.getElementById("creater").value = store.dataset.reportNumber
      ? store.dataset.creater
      : "";
    document.getElementById("chief-person").value = store.dataset.reportNumber
      ? store.dataset.chiefPerson
      : "";
    document.getElementById("sign-date").value = store.dataset.signDate
      ? store.dataset.signDate
      : new Date();

    //--------------------------------------------------------------
    // let responce = await fetch("./data.json");
    let iData = instrumets;

    const instrumentsDatalist = document.querySelector("#instruments");
    const iInstruments = iData.instruments;
    console.log(instrumentsDatalist.childNodes);
    if (instrumentsDatalist.childNodes.length === 1) {
      iInstruments.forEach((element) => {
        const newOption = document.createElement("option");
        newOption.textContent = element["instrument-name"];
        instrumentsDatalist.append(newOption);
      });
    }
    console.log(instrumentsDatalist.childNodes);

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
      const SiblingSiblingCertificate = tdSiblingNumber.nextSibling.nextSibling;
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
  superOrder.value = superOrderNumber.value;
});
// _________________________________________________________________________
const other = document.querySelector("#other");
const otherText = document.querySelector("#other-text");

// _________________________________________________________________________
let pageCounter = 1;
let totalPages = 1;
const bodyTag = document.querySelector("body");
const reportDate = document.getElementById("report-date");
const orderDescription = document.getElementById("order-object");
console.log(orderDescription);
const reportID = document.getElementById("report-number");
function addNewPage() {
  pageCounter++;
  picsInPages[`${pageCounter}`] = [];
  bodyTag.insertAdjacentHTML(
    "beforeend",

    `<p id = "page#${pageCounter}" style="display:none">${pageCounter}<p>
    <section class="new-page" >
    <button style="position:absolute" class="remove-page-button">Удалить страницу</button>
      <div class="new-page-header">
        <p class="new-page-header-title">
          ОТЧЕТ О РЕЗУЛЬТАТАХ КОНТРОЛЯ ГЕОМЕТРИЧЕСКОЙ ФОРМЫ
        </p>
        <div class="new-page-header-section">
          <span class="new-page-header-section-id">Отчет № ${reportID.value}-${
      superOrderNumber.value
    }-${year.textContent}</span>
          <span class="new-page-header-section-date"> от ${reportDate.valueAsDate
            .toLocaleString("ru")
            .slice(0, 10)} </span>

          <span class="new-page-header-section-order--number">
            Заказ № ${superOrderNumber.value} </span
          >
          <span class="new-page-header-section-order--description"
            >${orderDescription.value}</span
          >
        </div>
      </div>
      <div class="new-page-content" id=${pageCounter}>
      <button class="buttonToAddImg"  >Добавить изображение</button>
      </div>
      <div class="bottom-title">Лист ${pageCounter} из </div>
      </section>
     `
  );
  const allPagesCount = document.querySelectorAll(".bottom-title");
  allPagesCount.forEach((elem, i) => {
    elem.textContent = "Лист " + (i + 1) + " из " + pageCounter;
  });
  const newContent = document.getElementById(`${pageCounter}`);
  newContent.addEventListener("click", (e) => {
    if (
      e.target.tagName === "BUTTON" &&
      e.target.classList.contains("buttonToAddImg")
    ) {
      picsInPages[`${pageCounter}`].push(
        picsInPages[`${pageCounter}`].length + 1
      );

      const section = e.currentTarget;

      section.insertAdjacentHTML(
        "beforeend",
        ` <div  id='img#${pageCounter}-${
          picsInPages[`${pageCounter}`][
            picsInPages[`${pageCounter}`].length - 1
          ]
        }' class ="report-images"  >
        <img style ="rotate:0deg" />
        <button style="left:1090px; top:${
          picsInPages[`${pageCounter}`][
            picsInPages[`${pageCounter}`].length - 1
          ] * 125
        }px"  class ="remove-button">удалить изображение</button>
        <button style="left:1190px; top:${
          picsInPages[`${pageCounter}`][
            picsInPages[`${pageCounter}`].length - 1
          ] * 125
        }px" class = "rotate-button">повернуть</button> 
        <input style="left:1090px; top:${
          picsInPages[`${pageCounter}`][
            picsInPages[`${pageCounter}`].length - 1
          ] *
            125 +
          50
        }px" type="range" min = "0" max = "100" step ="1" class='size-button' value="100">
        </div>
      <input type="file" name="newImg" id="${pageCounter}-${
          picsInPages[`${pageCounter}`][
            picsInPages[`${pageCounter}`].length - 1
          ]
        }" accept="image/*" >
    `
      );

      const newInput = document.getElementById(
        `${pageCounter}-${
          picsInPages[`${pageCounter}`][
            picsInPages[`${pageCounter}`].length - 1
          ]
        }`
      );
      const newImg = document.getElementById(
        `img#${pageCounter}-${
          picsInPages[`${pageCounter}`][
            picsInPages[`${pageCounter}`].length - 1
          ]
        }`
      );
      newInput.addEventListener("change", (e) => {
        const target = e.target;

        if (!FileReader) {
          alert("FileReader не поддерживается — облом");
          return;
        }

        if (!target.files.length) {
          alert("Ничего не загружено");
          return;
        }

        const fileReader = new FileReader();
        fileReader.onload = function () {
          newImg.childNodes[1].src = `${fileReader.result}`;
          // newImg.style = `background-image:url('${fileReader.result}'); background-size:contain; background-repeat:no-repeat`;
        };

        fileReader.readAsDataURL(target.files[0]);
        target.style = "display:none";
      });
    }
  });
  newContent.addEventListener("input", (e) => {
    if (e.target.tagName === "INPUT") {
      const img = e.target.parentNode.querySelector("img");
      img.style.width = `${e.target.value}%`;
    }
  });
}
function refreshReport() {
  const IDs = document.querySelectorAll(".new-page-header-section-id");
  const date = document.querySelectorAll(".new-page-header-section-date");
  const orderNumber = document.querySelectorAll(
    ".new-page-header-section-order--number"
  );
  const orderObject = document.querySelectorAll(
    ".new-page-header-section-order--description"
  );

  IDs.forEach((id) => {
    id.textContent = `Отчет № ${reportID.value}-${superOrderNumber.value}-${year.textContent}`;
  });
  date.forEach((date) => {
    date.textContent = ` от ${reportDate.valueAsDate
      .toLocaleString("ru")
      .slice(0, 10)} `;
  });
  orderNumber.forEach((on) => {
    on.textContent = `Заказ № ${superOrderNumber.value} `;
  });

  orderObject.forEach((oO) => {
    oO.textContent = `${orderDescription.value}`;
  });
}
document.addEventListener("mousedown", (e) => {
  const img = e.target;
  const divImg = e.target.parentNode;
  const mainPage = document.querySelector(".main_page");
  const mainPageHeight = window.getComputedStyle(mainPage, null);
  const mainPageHeightNumber = parseInt(mainPageHeight.height.slice(0, -2));
  console.log(mainPageHeight.height);
  let shiftX = e.clientX - img.getBoundingClientRect().left;
  let shiftY = e.clientY - img.getBoundingClientRect().top;

  const divId = e.target.parentNode.parentNode.id;
  console.log(divId[4]);
  const prevPageCounter = pageCounter;
  pageCounter = parseInt(divId);
  if (img.tagName === "IMG") {
    img.style.position = "absolute";
    // moveAt(e.pageX, e.pageY - mainPageHeightNumber * pageCounter);

    function moveAt(pageX, pageY) {
      img.style.left = pageX - shiftX + "px";
      img.style.top = pageY - shiftY + "px";
    }
    // function onMouseMove(e){
    //   moveAt(e.pageX,e.pageY-  pageHeight);

    // }
  }
  document.addEventListener("mousemove", moveImg);
  function moveImg(e) {
    moveAt(e.pageX, e.pageY - mainPageHeightNumber * (pageCounter - 1));
  }
  document.onmouseup = function () {
    pageCounter = prevPageCounter;
    document.removeEventListener("mousemove", moveImg);
    img.onmouseup = null;
  };
  img.oncontextmenu = () => {
    false;
  };
  img.ondragstart = function () {
    return false;
  };
});

document.addEventListener("click", (e) => {
  if (
    e.target.tagName === "BUTTON" &&
    e.target.classList.contains("remove-button")
  ) {
    // console.log(e.target.parentNode);
    e.target.parentNode.nextSibling.nextSibling.remove();
    e.target.parentNode.remove();
  }
  if (
    e.target.tagName === "BUTTON" &&
    e.target.classList.contains("remove-page-button")
  ) {
    e.target.parentNode.remove();
    pageCounter--;
    const allPagesCount = document.querySelectorAll(".bottom-title");
    allPagesCount.forEach((elem, i) => {
      elem.textContent = "Лист " + (i + 1) + " из " + pageCounter;
    });
  }
  if (
    e.target.tagName === "BUTTON" &&
    e.target.classList.contains("rotate-button")
  ) {
    const img = e.target.parentNode.querySelector("img");
    console.log(img.style.rotate.slice(0, -3));
    const newtDeg = parseInt(img.style.rotate.slice(0, -3)) + 90;
    console.log(newtDeg);
    img.style.rotate = `${newtDeg}deg`;
    // if (img.style.rotate !== ""){
    //   img.style.rotate = `${img.style.rotate + 90}deg`;else{

    //   }
  }
});
function FR() {}
// newImg.addEventListener("change", FR);

function saveReport() {
  store.dataset.reportNumber = document.getElementById("report-number").value;
  store.dataset.superOrderNumber =
    document.getElementById("super-order-number").value;
  store.dataset.reportDate = document.getElementById("report-date").value;
  store.dataset.orderNumber = document.getElementById("order-number").value;
  store.dataset.orderDate = document.getElementById("order-date").value;
  store.dataset.receiptNumber = document.getElementById("receipt-number").value;
  store.dataset.receiptDate = document.getElementById("receipt-date").value;
  store.dataset.orderObject = document.getElementById("order-object").value;
  store.dataset.stage = document.getElementById("stage-select").value;
  store.dataset.otherText = document.getElementById("other-text").value;
  store.dataset.measurePlace = document.getElementById("measure-place").value;
  store.dataset.measureDate = document.getElementById("measure-date").value;
  store.dataset.firstSource = document.getElementById("first-sorce").value;
  store.dataset.secondSource = document.getElementById("second-sorce").value;
  store.dataset.thirdSource = document.getElementById("third-sorce").value;
  store.dataset.firstInstrument =
    document.getElementById("first-instrument").value;
  store.dataset.secondInstrument =
    document.getElementById("second-instrument").value;
  store.dataset.thirdInstrument =
    document.getElementById("third-instrument").value;
  store.dataset.conclusion = document.getElementById("conclusion").value;
  store.dataset.remarks = document.getElementById("remarks").value;
  store.dataset.fullMeashure = document.getElementById("full-measure").value;
  store.dataset.acceptance = document.getElementById("acceptance").value;
  store.dataset.toCorrectrequired = document.getElementById(
    "to-correct-required"
  ).value;
  store.dataset.creater = document.getElementById("creater").value;
  store.dataset.chiefPerson = document.getElementById("chief-person").value;
  store.dataset.signDate = document.getElementById("sign-date").value;
}
