/* This is the users routes */
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    return res.json({
        message: "Users works"
    });
});

module.exports = router;