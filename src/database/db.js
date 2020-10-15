const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB online");
  } catch (error) {
    throw new Error("Error al conectar a la base de datos");
  }
};

module.exports = {
  connectDb,
};
