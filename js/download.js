const navitems = document.getElementById('navitems')
const logobar = document.getElementById('sidelogobar')
const h = navitems.getBoundingClientRect().height;
console.log(h)
navitems.style.setProperty('--navi-translate', `${(h / -1) - 30}px`)
logobar.style.setProperty('--bar-translate', `${h + 30}px`)

const osname = document.getElementById('osname')
const os = navigator.userAgent.indexOf("Win") != -1 ? "Windows":
           navigator.userAgent.indexOf("Mac") != -1 ? "MacOSX":
           navigator.userAgent.indexOf("Linux") != -1 ? "Linux": "Unknown or unsupported";

osname.innerHTML = os;

const linkbuttons = document.getElementsByClassName('linkbutton')
Array.from(linkbuttons).forEach(element => {
    element.addEventListener('mousedown', (e) => {
        element.style.transitionDuration = `0.1s`
        element.style.boxShadow = `0px 10px 0px #007d3b`
        element.style.translate = `0px -10px`
        const link = document.createElement("a");
        const file = new Blob(['This is a sample file, which would be replaced by the real app.'], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "download.txt";
        link.click();
        URL.revokeObjectURL(link.href);
    })
    element.addEventListener('mouseup', (e) => {
        element.style.transitionDuration = `0.1s`
        element.style.boxShadow = `0px 25px 0px #007d3b`
        element.style.translate = `0px -25px`
    })
    element.addEventListener('mouseleave', (e) => {
        element.style.transitionDuration = `0.5s`
        element.style.boxShadow = `0px 0px 0px #007d3b`
        element.style.translate = `0px 0px`
    })
    element.addEventListener('mouseenter', (e) => {
        element.style.transitionDuration = `0.5s`
        element.style.boxShadow = `0px 25px 0px #007d3b`
        element.style.translate = `0px -25px`
    })
});


