var mymodule = require('./mymodule')

mymodule(process.argv[2], process.argv[3], function callback(err, list){
    if (err) throw(err)
    list.forEach(function (file){
        console.log(file)
    })
})
