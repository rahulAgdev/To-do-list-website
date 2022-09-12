const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js"); // runs all the code in date.js
const app = express();
const tempPort = 3000;
// var newElement = "";  creating to define an empty newElement variable to be used. but using this will only add the latest element in the latest post action and hence we will be using an array.
var newElementarray = ["Buy food", "Cook food", "Eat food"];
// set apps view engine to ejs
app.set("view engine", "ejs"); // this is really important for the code to work
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let workitems = [];
let listTitle;
app.get("/", (req, res) => {
  // if (today.getDay() == 6 || today.getDay() == 0) {
  //   // getday is function which gives day as number and 6 and 0 means saturday and sunday
  //   res.write("Its a weekend today");
  //   res.write("Go out and have some fun");
  //   res.send();
  // } else {
  //   res.sendFile("index.html",{root:__dirname});
  // }
  // var day = "";
  // var currentDay = today.getDay();
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;

  //   default:
  //     console.log(
  //       "We are in hell !! Error: current day is equal to : " + currentDay
  //     );
  //     break;
  // }
  let day = date.getdate();
  res.render("list", {
    listTitle: day,
    newElementarray: newElementarray,
  }); // renders from the view engine. create a folder called views where the view engine will search for the template and then create the files(ejs files) the engine needs to look for into this folder.
  // <%=day%> --> marker that tells the engine to replace the variable with the data
});

app.post("/", (req, res) => {
  newElement = req.body.newItem;
  if(req.body.list ==="Work"){
    workitems.push(newElement);
    res.redirect("/work");
  }
  else{
    newElementarray.push(newElement);
    res.redirect("/"); // redirects render value to the home route.
    
  }
  // console.log(newElement);
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newElementarray: workitems });
});

// app.post("/work", (req,res)=>{
//   let item = req.body.newItem;
//   workitems.push(item);
//   res.redirect("/work");
// }); the form method is posting to the home route ... so write an if conditional in the home route saying that if the value of the button is work then we have to use this post request
app.listen(tempPort, () => {
  console.log("Being hosted at http://localhost:" + tempPort);
});

/* 
  we talk to people on a daily basis and we wish them and do promises with each other. we can also get feedback.
  knowing people through this.
  giving respect to other people 
    enter phone no. of person and then you can give respect.
  wishing luck on events 
   we can check years later that how some people wished us birthdays or something 
  give promises for the assurance
    promises can be made between 2 people and they can have mutual agreement. dosti break na ho udhari me.
  give review based on your exp.
    giving feedback to people around us. 

  discover people around you and then appreciate them

  schedule feature 
  colour theory
  content writing 

*/