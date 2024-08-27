const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGOODB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGOD connection error", error);
        process.exit(1)
    }
}
export default connectDB