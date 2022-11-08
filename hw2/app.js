

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const _ = require("lodash");
const mongoose = require("mongoose");



const homeStartingContent = "While it is true that people with pets often experience greater health benefits than those without, a pet doesn’t necessarily have to be a dog or a cat. A rabbit could be ideal if you are allergic to other animals or have limited space but still want a furry friend to snuggle with. Birds can encourage social interaction and help keep your mind sharp if you are an older adult. Snakes, lizards, and other reptiles can make for exotic companions. Even watching fish in an aquarium can help reduce muscle tension and lower your pulse rate.acus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "One of the reasons for these therapeutic effects is that pets fulfill the basic human need for touch. Even hardened criminals in prison show long-term changes in their behavior after interacting with pets, many of them experiencing mutual affection for the first time. Stroking, hugging, or otherwise touching a loving animal can rapidly calm and soothe you when you’re stressed or anxious. The companionship of a pet can also ease loneliness, and most dogs are a great stimulus for healthy exercise, which can substantially boost your mood and ease depression.";
const contactContent = "Playing with a dog, cat, or other pet can elevate levels of serotonin and dopamine, which calm and relax.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/blogDB", {useNewUrlParser: true});
mongoose.connect("mongodb+srv://admin-lydia:Test123@freecluster.s9rhmpu.mongodb.net/blogDB", {useNewUrlParser: true});

const postSchema = {
  title: String,
  content: String
};
const Post = mongoose.model("Post", postSchema);



const post1 = new Post({
  title: "The birth of puppy Simon🐶",
  content: "The birthday of my pet dog Simon is 15th November 2017. He is a Shiba Inu. I decide to treat him as my family member."
});

const post2 = new Post({
  title: "The first day with Simon🦴",
  content: "When he was 4 month old, I pick him to my home. He is really cute and smart."
});

const defaultPosts = [post1, post2];


app.get("/", function(req,res){
  Post.find({}, function(err, posts){
    if(posts.length === 0){
      Post.insertMany(defaultPosts, function(err){
        if (err){
          console.log(err);
        }else{
          console.log("Successfully saved default database!")
        }
      });
      res.redirect("/");
    }else{
      res.render("home", {
        startingContent: homeStartingContent,
        posts: posts
        });
    }
  });
});

app.get("/about", function(req, res) {
  res.render("about", {aboutContent: aboutContent});

});

app.get("/contact", function(req, res) {
  res.render("contact", {contactContent: contactContent});

});

app.get("/compose", function(req, res) {
  res.render("compose");

});


app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  post.save(function(err){
    if (!err){
      res.redirect("/");
    }
  })
});


app.get("/posts/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });

});

app.post("/delete",function(req, res){
  const deleteId = req.params.postId
  Post.findByIdAndDelete(deleteId, function(err, post){ 
      if (!err){
        res.redirect("/");
      }else{
        console.log(err);
      }
  });
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
