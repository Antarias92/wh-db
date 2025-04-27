const express = require("express");
//const app = express();
const cors = require("cors")
const bodyParser = require("body-parser");
//const taskRoutes = require("./routes/task.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//app.use("/api/tasks", taskRoutes);




app.listen(3000, () => console.log("Server is running on localhost: 3000"));