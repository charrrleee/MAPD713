import  Image from "../models/image.js"
import mongoose  from "mongoose"



export const createImage = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            "message" : "Please enter image information"
        })
    }
    console.log("create image controller start")
    await Image.createImageModel(req.body)
        .then((response) => {
            res.status(200).send({"message": "create image success"})
        })
        .catch((err) => {
            res.status(400).send({"message": "create image fail"})
        })
    console.log("create image controller end")

}

export const deleteImage = (req, res) => {
    res.send({message: "hahhah 222 "})
}

export const getImage = (req, res, next) => {
    Image.getImageModel(req.query)
    // res.send({message: "hahhah 111 "})
    next()
}
