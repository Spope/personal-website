var enterSquare = function(e){
    for(var i=0; i < squares.length; i++){
        squares[i].style.zIndex = 1;
    }
    var el = e.currentTarget;
    el.removeEventListener('click', enterSquare);
    var timer = setTimeout(function(){
        el.addEventListener('mouseleave', outSquare);
    }, 500);
    el.style.zIndex = 3;
    el.className = 'clicked '+el.className;
}

var outSquare = function(e){
    var el = e.currentTarget;
    el.removeEventListener('mouseleave', outSquare);
    el.className = el.className.replace('clicked ', '');
    el.addEventListener('click', enterSquare);
}

var squares = document.querySelectorAll('.square');
for(var i=0; i < squares.length; i++){
    squares[i].addEventListener('click', enterSquare);
}
