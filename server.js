const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4002;

app.use(cors());
app.use(bodyParser.json());

const activitySheetRoutes = require('./api/routes/activitySheet');

app.use('/activitysheets', activitySheetRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
