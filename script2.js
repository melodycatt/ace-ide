const cards = document.getElementsByClassName("cardimg");
const cardiff = 0 - Array.from(cards).length + 1;


let i = 0;
cards[0].parentElement.parentElement.style.translate = `${((i + cardiff)*22) / -2}px 0px`;
Array.from(cards).forEach((card) => {
    card.parentNode.id = "card" + i;
    card.parentNode.style.rotate = `${(i + cardiff)*10 + 1}deg`;
    card.parentNode.style.translate = `${(i + cardiff)*22 + 1}px ${-(i + cardiff) * 2 + 1}px`;
    card.style.setProperty("--filter", "url(\"#noise" + i + "\")")
    const svgTemplate = document.getElementById("svgTemplate");
    const svg = svgTemplate.cloneNode(true);
    svg.id = "";
    const filter = svg.querySelector("#noise")
    filter.id = "noise" + i;
    filter.querySelector("feTurbulence").querySelector("animate").setAttribute("begin", "card" + i + ".mouseenter");
    filter.querySelector("feDisplacementMap").querySelector("animate").setAttribute("begin", "card" + i + ".mouseenter");
    card.parentNode.insertBefore(svg, card);
    i++
});

document.getElementById('leftButton').addEventListener('click', () => move(-1));
document.getElementById('rightButton').addEventListener('click', () => move(1));


function move(direction) {
    var elms = Array.from(document.getElementsByClassName("card"));
    var start = elms[0]
    var end = elms[elms.length - 1]
    var cardsParent = document.getElementById("cards");

    if (direction === -1) {
        start.style.opacity = 0
        var start2 = start.cloneNode(true);
        cardsParent.appendChild(start2);
        start2.style.opacity = 1;
        start.className = "deadcard"
        deleteElm(cardsParent, start.id, 800);
        elms = Array.from(document.getElementById("cards").children).reverse()
        elmsCopy = elms.map(elm => elm.cloneNode(true))
        for(let i in elms) {
            elms[i].style.rotate = elmsCopy[elmsCopy[i * 1 + 1] ? i * 1 + 1 : 0].style.rotate;
            elms[i].style.translate = elmsCopy[elmsCopy[i * 1 + 1] ? i * 1 + 1 : 0].style.translate;
        }
    } else if (direction === 1) {
        cardsParent.insertBefore(end.cloneNode(true), start);
        cardsParent.removeChild(end);
        elms = Array.from(document.getElementById("cards").children).reverse()
        elmsCopy = elms.map(elm => elm.cloneNode(true))
        console.log(elms, elms[0], elms[0].style, elmsCopy.map(elm => elm.style.rotate))
        for(let i in elms) {
            elms[i].style.rotate = elmsCopy[elmsCopy[i * 1 - 1] ? i * 1 - 1 : elmsCopy.length - 1].style.rotate;
            console.log(elms[i].style.rotate)
            elms[i].style.translate = elmsCopy[elmsCopy[i * 1 - 1] ? i * 1 - 1 : elmsCopy.length - 1].style.translate;
        }
    }
}

function deleteElm(parent, childId, timeout) {
    console.log(parent, childId, timeout)
    setTimeout(() => {
        console.log(parent, childId, timeout)
        parent.removeChild(document.getElementById(childId));
    }, timeout);
}