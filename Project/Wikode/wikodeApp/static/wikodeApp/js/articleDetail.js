let abstractText = document.getElementById("abstract-text");
let tagPieceButton = document.getElementById("tag-piece-button")

let startIndex = 0;
let endIndex = 0;

abstractText.addEventListener("mouseup", () => {
    if (window.getSelection) {
        let selectedText = window.getSelection().toString();
        let wholeText = abstractText.textContent;
        startIndex = wholeText.indexOf(selectedText);
        endIndex = startIndex + selectedText.length
    }
})

document.addEventListener("click", () => {
    document.getElementById("tagContextMenu").style.display = "none";
})

document.addEventListener("contextmenu", () => {
    document.getElementById("tagContextMenu").style.display = "none";
})

abstractText.addEventListener("contextmenu", (e) => {
    e.stopPropagation();
    e.preventDefault();
    rightClick(e);
    return false;
}, false);

rightClick = (e) => {
    let tagContextMenu = document.getElementById("tagContextMenu");
    tagContextMenu.style.display = "block";
    tagContextMenu.style.left = e.clientX + window.pageXOffset + "px";
    tagContextMenu.style.top = e.clientY + window.pageYOffset + "px";
}

tagPieceButton.addEventListener("click", () => {
    console.log(startIndex)
    console.log(endIndex);
    document.getElementById("tagContextMenu").style.display = "none";
    startIndex = 0;
    endIndex = 0;
})
