var fs = require('fs')

contents = fs.readFileSync(process.argv[2], 'utf8')
var lines = contents.split('\n').length - 1

console.log(lines)
