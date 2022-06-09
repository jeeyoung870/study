// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
    mouseEnter : function(event) {
        event.target.innerText = "mouseEnter"
        event.target.style.color = colors[0];
    },
    mouseLeave : function() {
        h2Text.innerText = "mouseLeave";
        h2Text.style.color = colors[1];
    },
    resize : function() {
        h2Text.innerText = "resize";
        h2Text.style.color = colors[2];
    },
    contextMenu : function() {
        h2Text.innerText = "contextmenu (right click)";
        h2Text.style.color = colors[3];
    },
    click : function() {
        h2Text.innerText = "left click";
        h2Text.style.color = colors[4];
    }
};

const h2Text = document.querySelector("h2");
console.dir(h2Text);
h2Text.addEventListener("mouseenter", superEventHandler.mouseEnter);
h2Text.addEventListener("mouseleave", superEventHandler.mouseLeave);
h2Text.addEventListener("resize", superEventHandler.resize);
h2Text.addEventListener("contextmenu", superEventHandler.contextMenu);
h2Text.addEventListener("click", superEventHandler.click);