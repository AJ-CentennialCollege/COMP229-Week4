import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: String,
    year: String,
    director: String,
    genra: String,
    runtime: Number
}, {
    timestamps: true,
    collection: 'movies'
});

export default mongoose.model('Movies', MovieSchema);