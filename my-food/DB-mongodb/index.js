const mongoose = require("mongoose");
const mongoURL= "mongodb+srv://kcm_sarah:Bordel@cluster0.tjxu3.mongodb.net/my-food"

mongoose
  .connect(mongoURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => console.log("Connection Failed to MongoDB", err));
