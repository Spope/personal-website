var Scroll = {

    _ground: null,
    _transform: null,

    init: function() {
        if(!this.checkBrowser()) {
            this._transform = this.getSupportedTransform();
            this._ground = document.getElementById('header-home-background');
            window.requestAnimationFrame(this.scrollParallax.bind(this));
        }
    },

    scrollParallax: function() {
        var posY = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : window.pageYOffset;
        posY = posY.toFixed(2);
        if(posY < 550) {
            this._ground.style[this._transform] = 'translate3d(' + 0 + 'px, ' + (posY / 3) + 'px,0)';
        }

        window.requestAnimationFrame(this.scrollParallax.bind(this));
    },

    checkBrowser: function() {
        //|| navigator.userAgent.match(/Android/i)
        //|| navigator.userAgent.match(/iPad/i)
        //|| navigator.userAgent.match(/iPhone/i)
        //|| navigator.userAgent.match(/iPod/i)
        if(navigator.userAgent.match(/webOS/i)
           || navigator.userAgent.match(/BlackBerry/i)
           || navigator.userAgent.match(/Windows Phone/i)
        ){
            return true;
        }
        else {
            return false;
        }
    },

    getSupportedTransform: function() {
        var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
        var div = document.createElement('div');
        for(var i = 0; i < prefixes.length; i++) {
            if(div && div.style[prefixes[i]] !== undefined) {
                return prefixes[i];
            }
        }
        return false;
    }
}
