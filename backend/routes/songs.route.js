const express = require('express');
const router = express.Router();
const {
    setSong,
    getSongs,
    getSongById,
    updateSong,
    deleteSong
} = require('../controllers/songs.controller');


router.route('/').get(getSongs).post(setSong);
router.route('/:id').get(getSongById).put(updateSong).delete(deleteSong);


module.exports = router;