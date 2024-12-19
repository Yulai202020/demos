function onChange(e, type) {
    e.preventDefault();

    let id = type === "p" ? "parent" : "move";
    const moving = document.getElementById(id);

    const border_color = document.getElementById("border-color-"+id).value;
    const color = document.getElementById("color-"+id).value;
    const background_color = document.getElementById("background-color-"+id).value;
    const unit = document.getElementById("unit-"+id).value;
    const position = document.getElementById("position-"+id).value;

    const top = document.getElementById("top-"+id).value + unit;
    const bottom = document.getElementById("bottom-"+id).value + unit;
    const right = document.getElementById("right-"+id).value + unit;
    const left = document.getElementById("left-"+id).value + unit;

    moving.setAttribute("style", `position: ${position}; ${top !== unit && `top: ${top}`}; ${bottom !== unit && `bottom: ${bottom}`}; ${right !== unit && `right: ${right}`}; ${left !== unit && `left: ${left}`}; color: ${color}; border: 1px solid ${border_color}; background-color: ${background_color}`);
}

function parentDialogOpen() {
    const parent_dialog = document.getElementById("parent-dialog");
    parent_dialog.showModal();
}

function parentDialogClose() {
    const parent_dialog = document.getElementById("parent-dialog");
    parent_dialog.close();
}

function childDialogOpen() {
    const child_dialog = document.getElementById("child-dialog");
    child_dialog.showModal();
}

function childDialogClose() {
    const child_dialog = document.getElementById("child-dialog");
    child_dialog.close();
}

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "1") {
        childDialogOpen();
    }

    if (event.ctrlKey && event.key === "2") {
        childDialogClose();
    }

    if (event.ctrlKey && event.key === "3") {
        parentDialogOpen();
    }

    if (event.ctrlKey && event.key === "4") {
        parentDialogClose();
    }
})