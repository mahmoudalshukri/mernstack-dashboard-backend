import mongoose from 'mongoose';

const TranscationSchema = new mongoose.Schema(
    {
        userId: String,
        cost: String,
        products: {
            type: [mongoose.Types.ObjectId],
            of: Number
        }
    },
    { timestamps: true }
);

const Transcation = mongoose.model("Transcation", TranscationSchema);
export default Transcation;