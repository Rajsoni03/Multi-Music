const Profile = require("../models/profile.model")
const User = require("../models/user.model");
const asyncHandler = require("express-async-handler");


// @desc    Create User
// @route   POST /api/user
// @access  Public
const addUser = asyncHandler(async (req, res) => {
    // create profile object 
    const profile = await Profile.create({});

    // add profile field into req.body
    var reqBodyUpdated = req.body;
    reqBodyUpdated['profile'] = profile._id;

    // create user
    const user = await User.create(reqBodyUpdated);

    // if user is not created then delete the profile
    if (!user){
        const deletedProfile = await Profile.findByIdAndDelete(reqBodyUpdated['profile']);
        console.log("Profile deleted for ", reqBodyUpdated['profile'], deletedProfile);
    }
    else{
        res.status(500).json({message:"error while creating user."});
    }
    res.status(200).json(user);
});


// @desc    Get All User
// @route   GET /api/user
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
});


module.exports = {
    addUser,
    getUsers
}