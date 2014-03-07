var Scroll = {

    init: function() {
        if(!this.checkBrowser()) {
            this.scrollParallax();
        }
    },

    scrollParallax: function() {
        window.addEventListener('scroll', function(e) {
            var doc = document.documentElement, body = document.body;
            var top = (doc && doc.scrollTop  || body && body.scrollTop  || 0);
            document.querySelector('#header-home').style.backgroundPosition = "50% "+top/3+"px";
        });
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
