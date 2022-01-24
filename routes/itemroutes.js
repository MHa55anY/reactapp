const router = require('express').Router()

let Item = require('../models/item')
let Count = require('../models/api')


//Function to increase Count value
function increase(){

    Count.find()
    .then(count=>{
    console.log(count)
        count[0].count = count[0].count+1;
    
        count[0].save()
        
    
    })

}


router.route('/').get((req,res)=>{


Item.find()
.then(prod => res.json(prod))
.catch(err => res.status(400).json('Err'+err));

})

router.route('/add').post((req,res)=>{
 const  name = req.body.name;
 const type = req.body.type;

 increase(); //Increase count when this handler is deployed


    const items = new Item({name,type});

    items.save()
    .then(()=>res.json('Product added'))
    .catch(err=>res.status(400).json('Error' + err))
   
});

router.route('/delete/:id').delete((req,res)=>{

    Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/addcount').post((req,res)=>{

    const count = 0;
    const Api = new Count({count})

    Api.save()
    .then(()=>res.json("api count added"))
    .catch(err=>res.status(400).json('Err'+err));

})

router.route('/apicount').get((req,res)=>{
    Count.find()
    .then(count => res.json(count))
    .catch(err => res.status(400).json('Err'+err));
    
})

module.exports = router;