import mongoose from "mongoose"
import  {Schema}  from "mongoose"

let ImageSchema = new Schema({
    imageId: String,
    name: String,
    url: String,
    size: String,
    isValid: Boolean,
});

const createImageModel = (payload) => {
    const Model = mongoose.model('Image', ImageSchema);
    const instance = new Model(payload)
    instance.save((err) => {
        return err
    })
    console.log("create image model start")
    return Promise.resolve("success")
}

const updateImageModel = async () => {
    const Model = mongoose.model('Image', ImageSchema);
    await Model.set(() => {

    })

}

const deleteImageModel = async () => {
    await Model.set(() => {

    })
}

const getImageModel = async (payload) => {
    console.log(payload, "??????")
    // const Model = mongoose.model('Image', ImageSchema);
    const Model = mongoose.connection.model('Image', ImageSchema);
    Model.find().exec((err) => {
        console.log(err)
    })
    //     .where('createdDate').gt(oneYearAgo).exec(callback);

}

const listImageModel = async () => {
    await Model.get(() => {

    })
}


export default { createImageModel, getImageModel };

