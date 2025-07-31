const router = require("express").Router()
const User = require("../models/User")
const Car = require("../models/Car")

router.get('/new', async (req,res)=>{
    res.render('car/car-homepage.ejs')
})

// in the post route
// save the req.body to the data base
// redirect the user to the homepage again

//dont know with what to with ready to eat like what do i should replace it with 
router.post('/new', async (req,res)=>{
    console.log(req.body)
    try{
        await Car.create(req.body)
        res.redirect("/cars")
    } catch(error){
        console.log(error)
    }
})
    // save the req.body in the database
    // import the model Car model with the require statement
    // use Car model to create a new car from the req.body
    // Model.create(req.body)

    router.get('/', async(req,res)=> {
        try{
            const allCars = await Car.find()
            res.render('car/all-car.ejs' , {allCars})
        } catch(error){
            console.log(error)
        }
    })

    //delete from the fruits still not many changes
    router.get("/:id/delete", async (req,res)=>{
    console.log(req.params)
    try{
        const deletedCar = await Car.findByIdAndDelete(req.params.id)
        res.redirect("/Cars")
    }
    catch(error){
        console.log(error)
    }
})


// UPDATE

router.get("/:id/update",async(req,res)=>{
    try{
        const foundCar = await Car.findById(req.params.id)
        res.render("car/car-update.ejs",{foundCar: foundCar})
    }
    catch(error){
        console.log(error)
    }
})

router.put("/:carId/update",async(req,res)=>{
    // console.log(req.body)
    const updatedCar = await  Car.findByIdAndUpdate(req.params.carId, req.body)
    res.redirect("/cars")
})


// duno if i should put /cars or /car
module.exports = router


