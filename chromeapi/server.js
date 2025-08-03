const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

// Check if DATABASE is loaded
if (!process.env.DATABASE) {
    throw new Error("DATABASE connection string is missing in config.env");
}

// Replace <PASSWORD> with actual password from env
const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
    useNewUrlParser: true,
})
    .then(() => console.log("DB Connection Successfully"))
    .catch(err => {
        console.error("DB Connection Error:", err);
        process.exit(1);
    });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});