const express = require('express');
const mongoose = require('mongoose');
const envalid = require("envalid");
const router = express.Router();
const axios = require("axios");

// Get environment variables
const env = envalid.cleanEnv(process.env, {
    ACTIVITY_SHEET_CLIENT_ID: envalid.str(),
    ACTIVITY_SHEET_CLIENT_SECRET: envalid.str(),
    ACTIVITY_SHEET_ENDPOINT: envalid.url({default: "https://www.coop.co.uk/nm/"})
});

var nmAxiosBasicAuth = 'Basic ' + Buffer.from(env.ACTIVITY_SHEET_CLIENT_ID + ':' + env.SNAPP_CLIENT_SECRET).toString('base64');

const nmAxios = axios.create({
  baseURL: env.ACTIVITY_SHEET_ENDPOINT,
  timeout: 3000,
  headers: {'Authorization': nmAxiosBasicAuth}
});

mongoose.connect('mongodb://localhost:27017/coop-nm', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Activity Sheet MongoDB database connection established successfully");
})

let ActivitySheet = require('../model/activitySheet.model');

router.route('/').get(function(req, res) {
    ActivitySheet.find(function(err, ActivitySheet) {
        if (err) {
            console.log(err);
        } else {
            res.json(ActivitySheet);
        }
    });
});

module.exports = router;
