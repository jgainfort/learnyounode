var http = require('http')
var bl = require('bl')
var responses = []
var counter = 0
var urlCount = process.argv.length - 2


function printResults(){
    for (i = 0; i < urlCount; i++) console.log(responses[i])
}

function httpGet (n){
    http.get(process.argv[n + 2], function (response) {
       response.pipe(bl(function (err, data){
            if (err) console.error(err)
            counter++
            responses[n] = data.toString()
            if (counter == urlCount) printResults()
        }))
    })
}

for (j = 0; j < urlCount; j++) httpGet(j)

