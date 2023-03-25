const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true}
    },
    {timestamps: true}
);
module.exports = mongoose.model("Movie", MovieSchema);