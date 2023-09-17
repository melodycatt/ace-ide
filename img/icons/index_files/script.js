/* const sideLogo = document.getElementById('sidelogo');
sideLogo.addEventListener("mouseover", (e) => { sideLogo.src = 'img/logoSimpleDrop.png'; });
sideLogo.addEventListener("mouseout", (e) => { sideLogo.src = 'img/logoSimple.png'; }); */

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
            console.log('hi')
        };
}

function enableScroll() {
    window.onscroll = function() {};
}