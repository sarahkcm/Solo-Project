const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  { ID_post: {
    type: String,
    required: true
  },
    Title: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 50,
      unique: true,
    },
    Picture: {
      type: String,
    },
    description :{
      type: String,
      max: 2000,
    },
    likes: {
      type: [String],
      required: true,
    }
  },
  {
    timestamps: true,
  }
);




const Post = mongoose.model("post", postSchema);

module.exports = Post;