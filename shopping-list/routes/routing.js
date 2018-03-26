var express = require('express')
var router = express.Router()
var storage = []

router.get('/', function (req, res) {
    res.render('main', {
        items: storage
    })
})
.post('/', function (req, res) {
    let item = req.body.listItem;
    let trim = item.trim() //trim all white spaces
    if(trim.length > 0){ //check if string is not empty
    let time = new Date().getTime() //if string is not empty put all data to array
    let object = {}
    object.id = time;
    object.item = item;
    storage.push(object) 
    }

    res.redirect('/')
})


router.post('/delete', function (req, res){
    let id = req.body.delete;

    storage.forEach(function(i, index, item){//delete item from array
        if(i.id == id){
            storage.splice(index,1)
        }
    })

    res.redirect('/')
})
module.exports = router