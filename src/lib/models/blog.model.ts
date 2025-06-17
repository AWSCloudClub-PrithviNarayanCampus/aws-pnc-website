import mongoose, { Schema } from "mongoose"
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    meta_description: {
        type: String,
    },
    slug: {
        type: String,
    },
    textContent: {
        type: String,
    },
    headerImageUrl: {
        type: [String],
    },
    author: {
        type: String,
    },
    category: {
        type: String,
    },
    hasPublished: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const BlogModel = mongoose.models.BlogModel || mongoose.model("BlogModel", BlogSchema);
export default BlogModel;