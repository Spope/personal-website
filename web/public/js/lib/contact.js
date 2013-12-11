var Contact = {

    name: {},
    email: {},
    message: {},
    postUrl : '',

    init: function(){

        this.name = document.querySelector('#input-name');
        this.email = document.querySelector('#input-email');
        this.message = document.querySelector('#input-message');
        this.postUrl = document.querySelector('#form-contact').action;

        document.querySelector('#form-contact').addEventListener('submit', function(e){
            e.preventDefault();
            this.submit();

            return false;

        }.bind(this));
    },

    submit: function(){

        var options = {
            url: this.postUrl,
            method: 'post',
            body: 'name='+this.name.value+'&email='+this.email.value+'&message='+this.message.value,
            requestHeader: 'application/x-www-form-urlencoded',
            error: function(text) {
                this.name.className = 'error';
                this.email.className = 'error';
                this.message.className = 'error';
            },
            callback: function(response){

                if(response.response) {
                    document.querySelector('#form-contact').style.display = 'none';
                    document.querySelector('#thanks').style.display = 'block';
                }
            }
        }

        this.xhr(options);
    },

    xhr: function(options){

        options.body = options.body || '';
        options.method = options.method || 'GET';
        options.requestHeader = options.requestHeader || 'application/json';
        if(!options.url)throw Error('XHR need a URL');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(event) {
            if (xhr.readyState == 4) {

                if(xhr.status == 201) {
                    if(options.callback){
                        options.callback(JSON.parse(xhr.responseText));
                    }
                    return;
                } else {
                        options.error(JSON.parse(xhr.responseText));
                }
            }
        };
        xhr.open(options.method, options.url, true);
        xhr.setRequestHeader('Content-Type', options.requestHeader);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send(options.body);
    }
}
