// import json server
const jsonserver=require("json-server")

// create json server
const server=jsonserver.create()

//cors
const cors=require('cors')
//to use cors
server.use(cors())

//middleware
const middleware=jsonserver.defaults()

//use middle ware
server.use(middleware)

//to connect the dbjson file
const router=jsonserver.router('db.json')
server.use(router)


const PORT=5000
server.listen(PORT,()=>{
    console.log(`json server started at port:${PORT}`);
})



