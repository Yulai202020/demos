let isChanging = false;
let Changing;

function create(e) {
    e.preventDefault();

    const unit = document.getElementById("unit").value;

    const text = document.getElementById("text").value;
    const position = document.getElementById("position").value;
    const top = document.getElementById("top").value + unit;
    const bottom = document.getElementById("bottom").value + unit;
    const left = document.getElementById("left").value + unit;
    const right = document.getElementById("right").value + unit;
    const z_index = document.getElementById("z-index").value;

    if (isChanging) {
        Changing.setAttribute("style", `position: ${position}; ${top !== unit && `top: ${top}`}; ${bottom !== unit && `bottom: ${bottom}`}; ${right !== unit && `right: ${right}`}; ${left !== unit && `left: ${left}`}; ${z_index !== "" && `z-index: ${z_index}`}`);
        Changing.innerHTML = text;

        const type = document.getElementById("type");
        type.textContent = "Creation";

        isChanging = false;
        Changing = null;

    } else {
        // get elements
        const container = document.getElementById("container");

        // create div
        const div = document.createElement("div");
        div.classList.add("child");

        div.setAttribute("style", `position: ${position}; ${top !== unit && `top: ${top}`}; ${bottom !== unit && `bottom: ${bottom}`}; ${right !== unit && `right: ${right}`}; ${left !== unit && `left: ${left}`}; ${z_index !== "" && `z-index: ${z_index}`}`);

        div.addEventListener('click', onClickDiv);

        // append
        div.innerHTML = text;
        container.appendChild(div);
    }

    document.getElementById("form").reset();
}

function onClickDiv(event) {
    const type = document.getElementById("type");
    type.textContent = "Edition";

    const target = event.target;

    // document.getElementById("unit").value;

    document.getElementById("text").value = target.textContent;
    document.getElementById("position").value = target.style.position;
    document.getElementById("top").value = target.style.top;
    document.getElementById("bottom").value = target.style.top;
    document.getElementById("left").value = target.style.left;
    document.getElementById("right").value = target.style.right;
    document.getElementById("z-index").value = target.style.zIndex;

    const top = target.style.top;

    document.getElementById("unit").value = extractUnit(top);

    Changing = target;
    isChanging = true;
}

function extractUnit(cssValue) {
    const match = cssValue.match(/[a-zA-Z%]+/);
    return match ? match[0] : 'px';
}