var Scroll = {

    init: function() {
        if(!this.checkBrowser()) {
            this.scrollParallax();
        }
    },

    scrollParallax: function() {

        var ground = document.getElementById('header-home');
        window.onscroll = function() {

            var posY = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : window.pageYOffset;
            if(posY < 550) {
                ground.style.backgroundPosition = "50% " + (-posY/2) + "px"; 
            }
        };
    },

    checkBrowser: function() {
        if( navigator.userAgent.match(/Android/i)
           || navigator.userAgent.match(/webOS/i)
           || navigator.userAgent.match(/iPhone/i)
           || navigator.userAgent.match(/iPad/i)
           || navigator.userAgent.match(/iPod/i)
           || navigator.userAgent.match(/BlackBerry/i)
           || navigator.userAgent.match(/Windows Phone/i)
        ){
            return true;
        }
        else {
            return false;
        }
    }
}
