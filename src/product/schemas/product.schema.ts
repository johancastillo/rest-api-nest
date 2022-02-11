import {Schema} from 'mongoose';


export const productSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    imageURL: String,
    price: Number,
    createAt: {
        type: Date,
        default: Date.now
    }
})

