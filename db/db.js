import mongoose from "mongoose"

const Connection = async (req, res) => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("Database is connected successfully");
  } catch (err) {
    console.log("Error", err.message);
  }
};

export default Connection;