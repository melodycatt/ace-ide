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

const linkbuttons = document.getElementsByClassName('linkbutton')
Array.from(linkbuttons).forEach(element => {
    element.addEventListener('mousedown', (e) => {
        element.style.transitionDuration = `0.1s`
        element.style.boxShadow = `0px 7px 0px #007d3b`
        element.style.translate = `0px -7px`
    })
    element.addEventListener('mouseup', (e) => {
        setTimeout(() => {
            pageChange('page1')
        }, 150)
        element.style.transitionDuration = `0.1s`
        element.style.boxShadow = `0px 15px 0px #007d3b`
        element.style.translate = `0px -15px`
    })
    element.addEventListener('mouseleave', (e) => {
        element.style.transitionDuration = `0.5s`
        element.style.boxShadow = `0px 0px 0px #007d3b`
        element.style.translate = `0px 0px`
    })
    element.addEventListener('mouseenter', (e) => {
        element.style.transitionDuration = `0.5s`
        element.style.boxShadow = `0px 15px 0px #007d3b`
        element.style.translate = `0px -15px`
    })
});


function pageChange (id) {
    const page = document.getElementById(id)
    const allPages = document.getElementsByClassName("active page")
    Array.from(allPages).forEach(element => {
        element.classList.toggle('active')
        element.classList.toggle('inactive')
    })
    page.classList.toggle('inactive')
    page.classList.toggle('active')
}

const navitems = document.getElementById('navitems')
const logobar = document.getElementById('sidelogobar')
const h = navitems.getBoundingClientRect().height;
console.log(h)
navitems.style.setProperty('--navi-translate', `${(h / -1) - 30}px`)
logobar.style.setProperty('--bar-translate', `${h + 30}px`)

/*
#sidelogowrapper:hover #sidelogobar {
    translate: 0 800px;
}

#sidelogowrapper:hover #navitems {
    translate: 0 -20px;
}

#sidelogowrapper:hover #obscuring-block {
    translate: 0 780px;
}*/
