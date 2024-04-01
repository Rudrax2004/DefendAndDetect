const {Schema , model, default: mongoose} = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        blog: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        provider: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        datePublished: {
            type: Date,
            default: Date.now,
            get: function (val) {
              return val.toLocaleDateString('en-US'); // Customize the date format as needed
            },
        },
        imageUrl:{
            type: String,
            required: true,
        }
    }
);
const blogmodel = new mongoose.model("blogs",blogSchema);

module.exports = blogmodel;