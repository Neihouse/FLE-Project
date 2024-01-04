
import mongoose from 'mongoose';

// Connect to MongoDB with connection pooling
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10 // Set the pool size to 10 connections
});

// Export the mongoose connection
export default mongoose.connection;
