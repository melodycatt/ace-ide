const cards = document.getElementsByClassName("cardimg");
const cardiff = 0 - Array.from(cards).length + 1;


let i = 0;
cards[0].parentElement.parentElement.style.translate = `${((i + cardiff)*22) / -2}px 0px`;
Array.from(cards).forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.filter = `var(--filter)`;
        card.style.animation = `pulse 0.8s ease-in-out`;   
        setTimeout(() => {
            card.style.filter = `none`;
            card.style.animation = `none`;        
        }, 799);
    });
    card.parentNode.id = "card" + i;
    card.parentNode.style.rotate = `${(i + cardiff)*10 + 1}deg`;
    card.parentNode.style.translate = `${(i + cardiff)*22 + 1}px ${-(i + cardiff) * 2 + 1}px`;
    card.style.setProperty("--filter", "url(\"#noise" + i + "\")")
    /*card.addEventListener("mouseenter", () => {
        card.style.animation = `pulse 1s ease-in-out`;
        card.style.filter = `url(#noise` + card.getAttribute("data-i") + `)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.animation = `none`;
        card.style.filter = `none`;
    });*/

    /*
    const svg = document.createElement("svg");
    svg.style.display = "none";
    const defs = document.createElement("defs");
    const filter = document.createElement("filter");
    const feTurbulence = document.createElement("feTurbulence");
    const feDisplacementMap = document.createElement("feDisplacementMap");
    const animate1 = document.createElement("animate");
    const animate2 = document.createElement("animate");
    svg.appendChild(defs);
    defs.appendChild(filter);
    filter.appendChild(feTurbulence);
    filter.appendChild(feDisplacementMap);
    filter.id = "noise" + i;
    feTurbulence.setAttribute("baseFrequency", "0.7,0.8");
    feTurbulence.setAttribute("seed", "0");
    feTurbulence.setAttribute("type", "fractalNoise");
    feTurbulence.setAttribute("result", "static");
    feDisplacementMap.setAttribute("in", "SourceGraphic");
    feDisplacementMap.setAttribute("in2", "static");
    feTurbulence.appendChild(animate1);
    feDisplacementMap.appendChild(animate2);
    animate1.setAttribute("attributeName", "seed");
    animate1.setAttribute("values", "0;100");
    animate1.setAttribute("dur", "1000ms");
    animate1.setAttribute("repeatCount", "1");
    animate1.setAttribute("begin", "card" + i + ".mouseenter");
    animate2.setAttribute("attributeName", "scale");
    animate2.setAttribute("values", "0;50;0");
    animate2.setAttribute("dur", "1000ms");
    animate2.setAttribute("repeatCount", "1");
    animate2.setAttribute("begin", "card" + i + ".mouseenter");
    document.body.appendChild(svg);
    */ 
    const svgTemplate = document.getElementById("svgTemplate");
    const svg = svgTemplate.cloneNode(true);
    const filter = svg.querySelector("#noise")
    filter.id = "noise" + i;
    filter.querySelector("feTurbulence").querySelector("animate").setAttribute("begin", "card" + i + ".mouseenter");
    filter.querySelector("feDisplacementMap").querySelector("animate").setAttribute("begin", "card" + i + ".mouseenter");
    document.body.appendChild(svg);
    i++
});

document.getElementById('leftButton').addEventListener('click', () => move(1));
document.getElementById('rightButton').addEventListener('click', () => move(-1));


function move(direction) {
    var elms = Array.from(document.getElementById("cards").children)
    var start = elms[0]
    var end = elms[elms.length - 1]
    var cardsParent = document.getElementById("cards");
    

    if (direction === -1) {
        cardsParent.appendChild(start.cloneNode(true));
        cardsParent.removeChild(start);
        elms = Array.from(document.getElementById("cards").children).reverse()
        elmsCopy = elms.map(elm => elm.cloneNode(true))
        console.log(elms, elms[0], elms[0].style, elmsCopy.map(elm => elm.style.rotate))
        for(let i in elms) {
            console.log(elmsCopy[i * 1 + 1] ? i * 1 + 1 : 0)
            console.log(elmsCopy[elmsCopy[i * 1 + 1] ? i * 1 + 1 : 0].style.rotate, elmsCopy[elmsCopy[i * 1 + 1] ? i * 1 + 1 : 0].style.translate)
            elms[i].style.rotate = elmsCopy[elmsCopy[i * 1 + 1] ? i * 1 + 1 : 0].style.rotate;
            console.log(elms[i].style.rotate)
            elms[i].style.translate = elmsCopy[elmsCopy[i * 1 + 1] ? i * 1 + 1 : 0].style.translate;
        }
        for(let i in elms) {
            console.log(elms[i], elms[i].style.rotate, elms[i].style.translate)  
        }
    } else if (direction === 1) {
    /*    cardsParent.insertBefore(end.cloneNode(true), start);
        console.log(start.style.rotate)
        end.style.rotate = start.style.rotate;
        end.style.translate = start.style.translate;
        cardsParent.removeChild(end);
        elms = Array.from(document.getElementById("cards").children)
        for(let i in elms) {
            elms[i].style.rotate = elms[i * 1 - 1].style.rotate;
            elms[i].style.translate = elms[i * 1 - 1].style.translate;
        }   */
    }

}