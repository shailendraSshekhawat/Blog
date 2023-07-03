import mongoose from "mongoose";

const connect = async () => {
    await mongoose.connect(
        "mongodb+srv://shelbyquiz0:12345Six@cluster0.otftjcc.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("server is connected to the database...");
};

export default connect;
