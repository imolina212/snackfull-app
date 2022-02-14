//Dependencies
const express = require("express")
const {
    getAllSnacks,
    addNewSnack,
    getOneSnack,
    deleteSnack,
    updateSnack
} = require("../queries/snacks")

//Controller to handle sub-routes
const snacks = express.Router();

//INDEX
snacks.get("/", async (_, response) => {
    const allSnacks = await getAllSnacks();
    if(allSnacks.length !== 0){
        response.status(200).json(allSnacks.data)
    }
    response.status(404).json({error: "Snacks Not Found"})
});
//SHOW
snacks.get("/:id", async (request, response) => {
    const { id } = request.params;
    try {
        const snack = await getOneSnack(id)
        if(snack.id) {
            response.status(200).json(snack)
        } else {
            response.status(404).json("error")
        }
    } catch (error) {
        throw error;
    }
})

//CREATE
snacks.post("/", async (request, response) => {
    try {
        const newSnack = await addNewSnack(request.body)
        response.status(200).json(newSnack)
    } catch (error) {
        throw error
    } 
})


//Update
snacks.put("/snacks/:id", async (request, response) => {
    const updatedSnack = await updateSnack(request.params.id, request.body)
    if(updatedSnack.id) {
        response.status(200).json(updatedSnack)
    } else {
        response.status(404).json({error: "Snack does not exist"})
    }
})

//DESTROY
snacks.delete("/:id", async (request, response) => {
    const { id } = request.params;
    try {
        const snack = await deleteSnack(id)
        response.status(200).json(snack)
    } catch (error) {
        throw error
    }
})

module.exports = snacks; 