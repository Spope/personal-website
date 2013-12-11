var Square = {

    _squares: [],

    init: function(){
        this._squares = document.querySelectorAll('.square');
        for(var i=0; i < this._squares.length; i++){
            this._squares[i].addEventListener('click', this.enterSquare.bind(this));
        }
    },

    enterSquare: function(e){
        for(var i=0; i < this._squares.length; i++){
            this._squares[i].style.zIndex = 1;
        }
        var el = e.currentTarget;
        el.removeEventListener('click', this.enterSquare.bind(this));
        var timer = setTimeout(function(){
            el.addEventListener('mouseleave', this.outSquare.bind(this));
        }.bind(this), 500);
        el.style.zIndex = 3;
        el.className = 'clicked '+el.className;
    },

    outSquare: function(e){
        var el = e.currentTarget;
        el.removeEventListener('mouseleave', this.outSquare.bind(this));
        el.className = el.className.replace('clicked ', '');
        el.addEventListener('click', this.enterSquare.bind(this));
    }
    
};
