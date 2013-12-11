var Size = {

    header: {},
    squares: {},
    portfolio: {},
    contact: {},

    init: function(){
        this.header = document.querySelector('#header'),
        this.squares = document.querySelector('#squares'),
        this.portfolio = document.querySelector('#portfolios'),
        this.contact = document.querySelector('#contact'),

        window.onload = function(){
            this.resize();
        }.bind(this);

        window.onresize = function(){
            this.resize();
        }.bind(this);
    },

    resize: function(){

        var headerH = this.header.offsetHeight;
        var squaresH = this.squares.offsetHeight;
        var portfolioH = this.portfolio.offsetHeight;

        this.portfolio.style.top = (headerH+squaresH)+"px";
        this.contact.style.top = (headerH+squaresH+portfolioH)+"px";
    }
 
}
