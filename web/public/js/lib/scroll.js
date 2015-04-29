var Scroll = {

    _ground: null,
    _transform: null,

    init: function() {
        this._transform = this.checkBrowser();
        if(this._transform) {
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
        var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
        var div = document.createElement('div');
        for(var i = 0; i < prefixes.length; i++) {
            if(div && div.style[prefixes[i]] !== undefined) {
                return prefixes[i];
            }
        }
        return false;
    },
}
