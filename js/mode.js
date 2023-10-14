const modechanger = document.getElementById('modeswitcher'),
      modeicon = document.getElementById('modeicon'),
      modecircle = document.getElementById('modecircle');
modechanger.addEventListener('click', () => {
    modecircle.style.transitionDuration = `1s`
    modecircle.style.width = window.innerWidth * 2 + 'px';
    modecircle.style.borderRadius = '30%';
    delay = getStyle(modecircle, 'transition-duration').match(/(ms)/g) == null ? getStyle(modecircle, 'transition-duration').replace(/(s)/g, '') * 1000 : getStyle(modecircle, 'transition-duration').replace(/(ms)/g, '');
    setTimeout(() => {
        modeicon.setAttribute('src', modechanger.getAttribute('data-mode') == 'light'? './img/icons/dark.png': './img/icons/light.png');
        modechanger.setAttribute('data-mode', modechanger.getAttribute('data-mode') == 'light'? 'dark': 'light');
        document.body.style.backgroundColor = modechanger.getAttribute('data-mode') == 'light'? '#f5f5f5' : '#000000';
        Array.from(document.getElementsByClassName('page')).forEach(element => element.style.backgroundColor = modechanger.getAttribute('data-mode') == 'light'? '#f5f5f5' : '#000000');
        modecircle.style.width = ''
        modecircle.style.borderRadius = ''
        setTimeout(() => {            
            modecircle.style.transitionDuration = ''
        }, 1000);
    }, delay);
})

function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hyphen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
            return letter.toUpperCase();
        });
        value = el.currentStyle[styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
            return (function(value) {
                var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
                el.runtimeStyle.left = el.currentStyle.left;
                el.style.left = value || 0;
                value = el.style.pixelLeft + "px";
                el.style.left = oldLeft;
                el.runtimeStyle.left = oldRsLeft;
                return value;
            })(value);
        }
        return value;
    }
}

