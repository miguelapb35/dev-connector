/* This is the posts routes */
const express = require("express");
const router = express.Router();

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => {
    return res.json({
        message: "Posts works"
    });
});

module.exports = router;