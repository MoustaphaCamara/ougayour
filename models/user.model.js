const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        telephone: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        reservations: [String],
        notifications: [String],
    },
    { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);