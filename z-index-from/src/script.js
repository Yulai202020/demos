let isChanging = false;
let Changing;

// using in js functions

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(text) {
  const rgbArray = text.match(/\d+/g);
  const r = parseInt(rgbArray[0]);
  const g = parseInt(rgbArray[1]);
  const b = parseInt(rgbArray[2]);

  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function extractUnit(cssValue) {
  const match = cssValue.match(/[a-zA-Z%]+/);
  return match ? match[0] : "px";
}

function getNumbers(text) {
  const match = text.match(/\d+/);
  return match ? parseInt(match[0]) : "";
}

function resetForm() {
  document.getElementById("form").reset();
}

// using in html functions

function create(e) {
  e.preventDefault();

  const unit = document.getElementById("unit").value;

  const position = document.getElementById("position").value;
  const top = document.getElementById("top").value + unit;
  const bottom = document.getElementById("bottom").value + unit;
  const left = document.getElementById("left").value + unit;
  const right = document.getElementById("right").value + unit;

  const height = document.getElementById("height").value + unit;
  const width = document.getElementById("width").value + unit;
  const z_index = document.getElementById("z-index").value;

  const background_color = document.getElementById("background-color").value;
  const border_color = document.getElementById("border-color").value;
  const color = document.getElementById("color").value;

  const style = `position: ${position}; ${top !== unit ? `top: ${top}` : ""}; ${bottom !== unit ? `bottom: ${bottom}` : ""}; ${right !== unit ? `right: ${right}` : ""}; ${left !== unit ? `left: ${left}` : ""}; ${z_index !== "" ? `z-index: ${z_index}` : ""}; ${height !== unit ? `height: ${height}` : ""} ; ${width !== unit ? `width: ${width}` : ""} ; background-color: ${background_color}; border-color: ${border_color}; color: ${color};`;

  if (isChanging) {
    Changing.setAttribute("style", style);

    const type = document.getElementById("type");
    type.textContent = "Create";

    isChanging = false;
    Changing = null;
  } else {
    // get elements
    const container = document.getElementById("container");

    // create div
    const div = document.createElement("div");
    div.classList.add("child");

    div.setAttribute("style", style);
    div.setAttribute("contenteditable", "true");

    div.addEventListener("click", onClickDiv);

    // append
    container.appendChild(div);
  }

  dialogClose();
}

function dialogOpen() {
  document.getElementById("form-dialog").showModal();
}

function dialogClose() {
  document.getElementById("form-dialog").close();
  resetForm();
}

function onClickDiv(event) {
  const target = event.target;

  if (event.shiftKey) {
    target.remove();
  } else if (event.ctrlKey) {
    const type = document.getElementById("type");
    type.textContent = "Edit";

    document.getElementById("position").value = target.style.position;
    document.getElementById("top").value = getNumbers(target.style.top);
    document.getElementById("bottom").value = getNumbers(target.style.bottom);
    document.getElementById("left").value = getNumbers(target.style.left);
    document.getElementById("right").value = getNumbers(target.style.right);
    document.getElementById("z-index").value = target.style.zIndex;

    document.getElementById("height").value = getNumbers(target.style.height);
    document.getElementById("width").value = getNumbers(target.style.width);

    document.getElementById("background-color").value = rgbToHex(
      target.style.backgroundColor,
    );
    document.getElementById("border-color").value = rgbToHex(
      target.style.borderColor,
    );
    document.getElementById("color").value = rgbToHex(target.style.color);

    const top = target.style.top;

    document.getElementById("unit").value = extractUnit(top);

    Changing = target;
    isChanging = true;

    dialogOpen();
  }
}

document.addEventListener("keydown", (event) => {
  if (event.shiftKey && event.key === "!") {
    dialogOpen();
  }
});
