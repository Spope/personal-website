var Scroll = {

    init: function() {
        this.scrollParallax();
    },

    scrollParallax: function() {
        window.addEventListener('scroll', function(e) {
            var doc = document.documentElement, body = document.body;
            var top = (doc && doc.scrollTop  || body && body.scrollTop  || 0);
            document.querySelector('#header-home').style.backgroundPosition = "50% "+top/3+"px";
        });
    }
}
