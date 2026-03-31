import mongooes, { Schema } from "mongoose"
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastLogin: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now }
})
const User = mongooes.model("User", userSchema)
export default User