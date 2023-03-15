let code = document.querySelector("pre");

window.addEventListener("mouseover", (e) => {
  rotateElement(e, code);
});

function rotateElement(event, element) {
  const x = event.clientX;
  const y = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * 50;
  const offsetY = ((y - middleY) / middleY) * 50;
  //   console.log(offsetX, offsetY);

  element.style.setProperty("--rotateX", offsetX + "deg");
  element.style.setProperty("--rotateY", -offsetY + "deg");
  // console.log(middelX,middelY);
  console.log(x, y);
}
