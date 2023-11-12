const express = require("express");
const { template } = require("handlebars");
const app = express();
const path = require("path");
const hbs = require("hbs");

const port = 3000;

// public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs')
app.set('views', template_path)
hbs.registerPartials(partials_path)

app.use(express.static(static_path))

app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/about", (req,res)=>{
    res.render("about");
})

app.get("/weather", (rea,res)=>{
    res.render("weather");
})

app.get("*", (req, res)=>{
    res.render("404error",{
        errorMsg: "OOPS! you found something we don't have."
    })
})


app.listen(port, ()=>{
    console.log(`listening to server on port no ${port}`);
})