const express = require('express');
const router = express.Router();

const allController= require("../controllers/allController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createNewAuthor", allController.createNewAuthor)

router.post("/createNewBook", allController.createNewBook)

router.get("/getAllBooks",allController.getAllBooksChetanBhagat)

router.get("/authorBookUpdate",allController.authorBookUpdate)

router.get("/findBookBetween",allController.findBooksbetween)



module.exports = router;