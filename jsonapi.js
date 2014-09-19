var http = require('http')
var url = require('url')

function parseTime(time){
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function parseUnix(time){
    return {
        unixtime: time.getTime()
    }
}

var server = http.createServer(function (request, response) {
    var query = url.parse(request.url, true)
    var time = new Date(query.query.iso)
    var result

    if (query.pathname == '/api/parsetime')
        result = parseTime(time)
    if (query.pathname == '/api/unixtime')
        result = parseUnix(time)

    if (result) {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(result))
    }
    else{
        response.writeHead(400)
        response.end()
    }
})
server.listen(+process.argv[2])
