const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    return res.status(200).json({
        status: "ok",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
