 var xhr = function(options){

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

document.querySelector('#form-contact').addEventListener('submit', function(e){

    e.preventDefault();
    submit();
    return false;
});

var submit = function(){
    var name = document.querySelector('#input-name').value;
    var email = document.querySelector('#input-email').value;
    var message = document.querySelector('#input-message').value;

    var options = {
        url: postContact,
        method: 'post',
        body: 'name='+name+'&email='+email+'&message='+message,
        requestHeader: 'application/x-www-form-urlencoded',
        error: function(text) {
            document.querySelector('#input-name').className = 'error';
            document.querySelector('#input-email').className = 'error';
            document.querySelector('#input-message').className = 'error';
        },
        callback: function(response){

            if(response.response) {
                document.querySelector('#form-contact').style.display = 'none';
                document.querySelector('#thanks').style.display = 'block';
            }
        }
    }

    xhr(options);
}
