import {body} from "express-validator"
import {getImage, deleteImage, createImage} from "../controllers/image.js";
import express from "express";
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', getImage)
router.post('/', createImage)
router.patch('/', deleteImage)


export default  router;
