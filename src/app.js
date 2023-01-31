const path = require('path');
const express = require('express');
const routes = require("./routes");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const logger = require("./config/logger");

const apiKey = process.env.API_KEY;
const port = process.env.PORT || 3001;

// Log the version number
const version = '0.0.7';
logger.log(`@2023 EFFIIS Cloud v${version} starting...`);

// Create an express app with static files in the pftracker/public folder
const app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, '../client/build'))); //serve static files

// Routes
app.use("/", routes);



// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

//RUN  
app.listen(port, () => {
    logger.log(`Server listening on port ${port}`);
});


