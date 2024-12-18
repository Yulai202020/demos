function onChange(e, type) {
    e.preventDefault();

    let id = type === "p" ? "parent" : "move";
    const moving = document.getElementById(id);

    const unit = document.getElementById("unit-"+id).value;
    const position = document.getElementById("position-"+id).value;

    const top = document.getElementById("top-"+id).value + unit;
    const bottom = document.getElementById("bottom-"+id).value + unit;
    const right = document.getElementById("right-"+id).value + unit;
    const left = document.getElementById("left-"+id).value + unit;

    moving.setAttribute("style", `position: ${position}; ${top !== unit && `top: ${top}`}; ${bottom !== unit && `bottom: ${bottom}`}; ${right !== unit && `right: ${right}`}; ${left !== unit && `left: ${left}`};`);
}