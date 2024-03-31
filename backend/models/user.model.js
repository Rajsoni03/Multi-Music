const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: [true, "please enter a unique username."],
            unique: true
        },
        email: {
            type: String,
            required: [true, "please enter a unique email."],
            unique: true
        },
        first_name: {
            type: String,
            required: [true, "please enter your first name."]
        },
        last_name: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: [true, "please enter your password."]
        },
        is_active: {
            type: Boolean,
            required: false,
            default: true
        },
        is_admin: {
            type: Boolean,
            required: false,
            default: false
        },
        profile: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Profile',
            required: true
        }
    },
    {
        timestamps: true
    }
);


const User = mongoose.model("User", userSchema);
module.exports = User;