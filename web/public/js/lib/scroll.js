window.addEventListener('scroll', function(e) {
    var doc = document.documentElement, body = document.body;
    var top = (doc && doc.scrollTop  || body && body.scrollTop  || 0);
    document.querySelector('#header-home').style.backgroundPosition = "50% "+top/3+"px";
});

if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;
    $(document).keydown(function (e) {

        switch (e.which) {
            //up
            case 38:
                $('html, body').stop().animate({
                    scrollTop: $(window).scrollTop() - distance
                }, time);
                break;

                //down
            case 40:
                $('html, body').stop().animate({
                    scrollTop: $(window).scrollTop() + distance
                }, time);
                break;
        }
    });
}
var time = 300;
var distance = 270;

function wheel(event) {
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle();
    event.preventDefault();
}

function handle() {

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time);
}

