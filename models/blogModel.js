import mongoose from 'mongoose';
const{model, Schema} = mongoose

const blogSchema = new Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    blogImage:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now,
        required:true
    }

})

const Blog = model('Blog', blogSchema);
export default Blog;