var canvas = document.getElementById("viewport"),
  context = canvas.getContext("2d");

make_base();

function make_base() {
  base_image = new Image();
  base_image.src = "img.jpg";
  base_image.onload = function () {
    context.drawImage(base_image, 10, 0, 100, 50);
  };
}
document.addEventListener("mousedown", (e) => {
  if (e.target.tagName === "CANVAS") {
    e.target.addEventListener("mousemove", (e) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        base_image,
        e.clientX - base_image.width,
        e.clientY - base_image.height
      );
    });
    document.onmouseup = function (e) {
      e.target.removeEventListener("mousemove", (e) => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          base_image,
          e.clientX - base_image.width,
          e.clientY - base_image.height
        );
      });
      context.drawImage(base_image, e.clientX, e.clientY);
    };
  }
});
