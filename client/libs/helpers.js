function sendAjax (method, uri, callback) {
    var xhr = createDialog();

    xhr.open(method, uri, true);
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            }
        }
    });
    
    xhr.send();
}

function createDialog () {
    var xhr;

    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject();
    }

    return xhr;
}
