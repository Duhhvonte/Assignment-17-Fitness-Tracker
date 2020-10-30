const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/fitnessDB',
    
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }

);

// Sets an initial port

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Import routes and give the server access to them.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listens on PORT

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});