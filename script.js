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
document.getElementById("report-date").valueAsDate = new Date();
document.getElementById("sign-date").valueAsDate = new Date();
const picsInPages = {};
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
const reportDate = document.querySelector("#report-date");
const orderDescription = document.querySelector("#order-object");
const reportID = document.querySelector("#report-number");
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
          <span class="new-page-header-section-id">Отчет № ${reportID.value}-${superOrderNumber.value}-${year.textContent}</span>
          <span class="new-page-header-section-date"> от ${reportDate.value} </span>

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

document.addEventListener("mousedown", (e) => {
  const img = e.target;
  const divImg = e.target.parentNode;
  const pageHeight = 400;
  if (img.tagName === "IMG") {
    img.style.position = "absolute";
    moveAt(e.pageX, e.pageY - pageCounter * pageHeight);

    function moveAt(pageX, pageY) {
      img.style.left = pageX - img.offsetWidth / 2 + "px";
      img.style.top = pageY - img.offsetHeight / 2 + "px";
    }
    // function onMouseMove(e){
    //   moveAt(e.pageX,e.pageY- pageCounter * pageHeight);

    // }
    document.addEventListener("mousemove", moveImg);
    function moveImg(e) {
      moveAt(e.pageX, e.pageY - pageCounter * pageHeight);
    }
    img.onmouseup = function () {
      document.removeEventListener("mousemove", moveImg);
      img.onmouseup = null;
    };
    img.ondragstart = function () {
      return false;
    };
  }
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
