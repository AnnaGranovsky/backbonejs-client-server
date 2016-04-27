var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    router = require('./router'),
    mode = process.argv[2];

http.createServer(start).listen(3000);

function start (request, response) {
    var types = {
            'html': 'text/html',
            'js': 'application/javascript',
            'css': 'text/css',
            'json': 'application/json',
            'ico': 'image/ico'
        },
        dir = getDir(),
        contentType,
        extention,
        filePath,
        urlData,
        action,
        route;

    urlData = request.url.substr(1, request.url.length).split('/');
    route = urlData[0];
    action = urlData[1];
    
    if (router.routes[route]){
        router.init(request, response, action, route);
    } else {
        filePath = dir + request.url;

        if (filePath === (dir + '/')) {
            filePath = dir + '/index.html';
        }

        extention = path.extname(filePath);
        contentType = types[extention.substr(1, extention.length)];
        sendFile(response, contentType, filePath);
    }

}

function getDir () {
    var dir;

    if (mode === '-pro') {
        dir = './public';
    } else {
        dir = '../client';
    }

    return dir;
}

function sendFile (response, contentType, filePath) {
    fs.stat(filePath, function (err, stats) {
        if (stats) {
            fs.readFile(filePath, function(error, data) {
                if (error) {
                    response.writeHead(500);
                    response.end();
                } else {
                    response.writeHead(200, {'Content-Type': contentType});
                    response.write(data);
                    response.end();
                }
            });
        } else {
            response.writeHead(404);
            response.end();
        }
    });
}