const mongoose = require('mongoose');

const songSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            default: "Unknown"
        },
        file: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false,
            default: "song_placeholder.png"
        },
        likes: {
            type: Array,
            required: false,
            default: []
        },
        like_court: {
            type: Number,
            required: false,
            default: 0
        },
        playlists: {
            type: Array,
            required: false,
            default: []
        }
    },
    {
        timestamps: true
    }
);

const Song = mongoose.model("Song", songSchema);
module.exports = Song;