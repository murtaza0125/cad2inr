// Import the required libararies
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

// Define the port and API URL
const port = 3000;
const API_URL = "https://www.frankfurter.app";
const app = express();

// Use the public folder for static files.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Handle the GET request from the user
app.get("/",  async (req, res) => {
    try {
    const param = "/latest?from=CAD&to=INR"
    const result = await axios.get(API_URL + param)
    res.render("index.ejs", {
        rate: result.data.rates.INR
    })
    } catch (error) {
    console.log(error);
    res.render("index.ejs", {
        rate: "error fetching info from the API"
        })
    }
})

// Listen to the set port
app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
});