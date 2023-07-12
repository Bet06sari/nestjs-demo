const express = require("express");
const app = express();
require("dotenv").config();
require("./src/db/dbConnection")
const port = process.env.PORT || 3001; 

app.get("/", (req, res) => {
    res.json({
        message: "Hoş Geldiniz"
    });
});

app.listen(port, () => {
    console.log(`Server ${port} portunda çalışıyor...`); 
});
