const express = require("express")

const server = express();

//create routes
server.get("/", function(request, response){

    response.send({
        message: "The server works okay",
        code: "success"
    })

})

//listening
server.listen(3000, () => console.log("Server is running"))
