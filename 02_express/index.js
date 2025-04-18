import express from 'express'

const app = express()

const port = 3000

app.use(express.json()); 
let tripData = []
let nextid = 1;

//for posting the route
app.post("/post", (req, res)=>{
    const{name,price} = req.body
    const newTrip = {id: nextid++, name, price}
    tripData.push(newTrip)
    res.status(201).send(newTrip)
})

//for getting the whole data
app.get("/get", (req, res)=>{
    res.status(200).send(tripData)

})

//for getting the data through id
app.get("/get/:id", (req, res) =>{
    const trip = tripData.find(t => t.id === parseInt(req.params.id))
    if(!trip){
        return res.status(404).send("not found")
    }
    res.status(200).send(trip)
})


//for updating the data
app.put("/put/:id", (req,res)=>{
    const trip = tripData.find(t => t.id === parseInt(req.params.id))
    if(!trip){
        return res.status(200).send("not found")

    }
    const {name, price} = req.body
    trip.name = name
    trip.price = price
    return res.status(200).send(trip)

})

//deleting the data

app.delete("/delete/:id", (req,res) =>{
    const index = tripData.findIndex(t => t.id === parseInt(req.params.id))
    if(index === -1){
        return res.status(404).send("not found")
    }
    tripData.splice(index, 1)
    return res.status(200).send("deleted")
})





app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(port, ()=> {
    console.log(`server is running at port: ${port}...`)
})