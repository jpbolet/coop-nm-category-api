const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coop-nm', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Delivery Note MongoDB database connection established successfully");
})

let ActivitySheet = require('./api/model/activitySheet.model');

ActivitySheet.findOne({'store_id': "12345678", 'range_end_date': "2019-06-18T00:00:00.000Z"}, function(err, activitySheet){
  if (!activitySheet) {
    activitySheet = new ActivitySheet(
      {
        store_id: "12345678",
        range_end_date: "2019-06-18T00:00:00.000Z",
        week: 24,
        weekly_news: "Following feedback, we ....... ",
        // actions: [{
        //     type: action
        // }],
        // need_to_return: [{
        //     type: publication
        // }],
        actions: [
          {publication: {display_name: "aaaa",type: "Magazines"}, placement: {type: "We Recommend Unit",location: "Magazine Fixture",position: "1"}, is_new: true },
          {publication: {display_name: "bbb",type: "Magazines"}, placement: {type: "We Recommend Unit",location: "Magazine Fixture",position: "2"}, is_new: false },
          {publication: {display_name: "ccc",type: "Magazines"}, placement: {type: "We Recommend Unit",location: "Magazine Fixture",position: "3"}, is_new: false },
          {publication: {display_name: "ddd",type: "Magazines"}, placement: {type: "Special Issue Space",location: "Refer to Planogram",position: "1"}, is_new: true },
          {publication: {display_name: "eee",type: "Magazines"}, placement: {type: "Special Issue Space",location: "Refer to Planogram",position: "2"}, is_new: false },
          {publication: {display_name: "fff",type: "Magazines"}, placement: {type: "Special Issue Space",location: "Refer to Planogram",position: "3"}, is_new: false },
          {publication: {display_name: "ggg",type: "Magazines"}, placement: {type: "Clipstrip",location: "2m Base +",position: "1"}, is_new: true },
          {publication: {display_name: "hhh",type: "Magazines"}, placement: {type: "Clipstrip",location: "3m Base +",position: "2"}, is_new: false }
        ],
        need_to_return: [
          {display_name: "iii",type: "Magazines"},
          {display_name: "jjj",type: "Magazines"},
          {display_name: "kkk",type: "Magazines"},
          {display_name: "lll",type: "Magazines"},
          {display_name: "mmm",type: "Magazines"},
          {display_name: "nnn",type: "Magazines"}
        ],
        update_timestamp: new Date()
      });

    activitySheet.save()
        .then(activitySheet => {
          console.log("saved activity sheet")
        })
        .catch(err => {
          console.error(err)
        });
  }
});
