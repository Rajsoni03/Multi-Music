const mongoose = require('mongoose');

const profileSchema = mongoose.Schema(
    {
        dp_image:{
            type: String,
            required: false,
            default: 'default_dp.png'
        },
        friends: {
            type: Array,
            required: false,
            default: []
        },
        groups: {
            type: Array,
            required: false,
            default: []
        }
    },
    {
        timestamps: true
    }
);


const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;