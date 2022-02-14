//Dependencies
const express = require("express")
const {
    getAllSnacks,
    addNewSnack,
    getOneSnack,
    deleteSnack,
    updateSnack,
} = require("../queries/snacks")

//Controller to handle sub-routes
const snacks = express.Router();

const { setValues } = require("../helpers/functions")


//INDEX
snacks.get("/", async (_, response) => {
    const snacks = await getAllSnacks();
    if(snacks.length === 0){
        response.status(500).json({error: 'server error'})
    } else {
        response.status(200).json({payload: snacks})
    }
})

//CREATE
snacks.post("/", async (request, response) => {
    try {
        const newSnack = await addNewSnack(request.body)
        response.status(200).json({success: true, payload: setValues(newSnack[0])})
    } catch (error) {
        throw error
    } 
})

//SHOW
snacks.get("/:id", async (request, response) => {
    const { id } = request.params;
    try {
        const snack = await getOneSnack(id)
        if(snack.id) {
            response.status(200).json({ success: true, payload: snack })
        } else {
            response.status(404).json({ success: false, payload: "not found" })
        }
    } catch (error) {
        throw error;
    }
})

//Update
snacks.put("/:id", async (request, response) => {
    const updatedSnack = await updateSnack(setValues(request.body), request.params.id) 
    try {
        if(updatedSnack.id && updatedSnack.name) {
            response.status(200).json({ success: true, payload: updatedSnack })
        } else {
            response.status(422).json({ success: false, payload: "include all fields" })
        }
    } catch (error) {
        throw error
    }
})

//DESTROY
snacks.delete("/:id", async (request, response) => {
    const { id } = request.params;
    try {
        const snack = await deleteSnack(id)
        if (snack.id) {
            response.status(200).json({ success: true, payload: snack })
        } else {
            response.status(422).json({ success: false, payload: snack})
        }
    } catch (error) {
        throw error
    }
})

module.exports = snacks; 