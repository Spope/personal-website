var resize = function(){

    var header = document.querySelector('#header');
    var squares = document.querySelector('#squares');
    var portfolio = document.querySelector('#portfolios');
    var contact = document.querySelector('#contact');

    var headerH = header.offsetHeight;
    var squaresH = squares.offsetHeight;
    var portfolioH = portfolio.offsetHeight;

    portfolio.style.top = (headerH+squaresH)+"px";
    contact.style.top = (headerH+squaresH+portfolioH)+"px";
}

window.onload = function(){
    resize();
}

window.onresize = function(){
    resize();
}
