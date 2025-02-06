import mongoose from "mongoose"

const paymentSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  paymentDate: { type: Date, default: Date.now },
})

const Payment = mongoose.model("Payment", paymentSchema)

export default Payment