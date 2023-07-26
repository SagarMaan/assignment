import mongoose from "mongoose";

export const server = async function (app, PORT, URL) {
  try {
    await mongoose.connect(URL);
    console.log("Server is connected to your Database");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
