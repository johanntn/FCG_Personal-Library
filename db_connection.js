const mongoose = require("mongoose");
const URI = process.env.DB;
const db = mongoose.connect(URI);
module.export = db;

