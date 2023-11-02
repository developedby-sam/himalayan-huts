const router = require("express").Router();
const Post = require("../schema/listingSchema");
const User = require("../schema/userSchema");

var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()



// creating a post
router.post("/",jsonParser, async (req, res) => {
    console.log(req.body)
    const newPost = new Post(req.body);

  });

// updating a post
router.put("/:id", jsonParser,async (req, res) => {

})

// deleting a post


router.delete("/:id", jsonParser,async (req, res) => {
  });



//get user's all posts

router.get("/profile/:username", async (req, res) => {
});

  
  module.exports = router;