const Song = require("../models/music.model");
const asyncHandler = require("express-async-handler")

// @desc    Create Song
// @route   POST /api/song
// @access  Public
const addSong = asyncHandler(async (req, res) => {
    const song = await Song.create(req.body);
    res.status(200).json(song);
});


// @desc    Get All Songs
// @route   GET /api/song
// @access  Public
const getSongs = asyncHandler(async (req, res) => {
    const song = await Song.find({});
    res.status(200).json(song);
});


// @desc    Get a Song
// @route   GET /api/song/:id
// @access  Public
const getSongById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const song = await Song.findById(id);
    res.status(200).json(song);
});


// @desc    Update Song
// @route   PUT /api/song/:id
// @access  Public
const updateSong = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const song = await Song.findByIdAndUpdate(id, req.body);

    if (!song) {
        res.status(404).json({ message: "Song not found." });
        return;
    }

    const updatedSong = await Song.findById(id);
    res.status(200).json(updatedSong);
});


// @desc    Delete Song
// @route   DELETE /api/song/:id
// @access  Public
const deleteSong = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const song = await Song.findByIdAndDelete(id);
    if (!song) {
        res.status(404).json({ message: "Song not found." });
        return;
    }
    res.status(200).json({ message: "Song deleted successfully." });
});


module.exports = {
    addSong,
    getSongs,
    getSongById,
    updateSong,
    deleteSong
};