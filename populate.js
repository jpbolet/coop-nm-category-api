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
        range_start_date: "2019-06-19T00:00:00.000Z",
        range_end_date: "2019-06-25T00:00:00.000Z",
        week: 25,
        weekly_news: "Following feedback, we are reducing the maximun number of collectibles each store receives. This will take effect from start of April, however this will only officially change on Kiosk plans in July as part of the range event. Please see the collectibles section for details on the new number of collectibles should range. As always you can use the Smiths (SNapp), Menzies (i-menzies), or G.E.White (IOM) websites for amending supply levels with your supplying wholesaler. Last Weeks early returns were £54k. The previous 6 weeks average og £61k, stores have missed out on nearly £37k in sales!",
        actions: [
          {publication: {display_name: "Disney Playtime",type: "Magazines"}, placement: {type: "We Recommend Unit",location: "Magazine Fixture",position: "1"}, is_new: true },
          {publication: {display_name: "Inside Soap",type: "Magazines"}, placement: {type: "We Recommend Unit",location: "Magazine Fixture",position: "2"}, is_new: false },
          {publication: {display_name: "Official Tour de France",type: "Magazines"}, placement: {type: "We Recommend Unit",location: "Magazine Fixture",position: "3"}, is_new: false },


          {publication: {display_name: "BEST&REAL PEOPLE& PACK",type: "Magazines"}, placement: {type: "Special Issue Space",location: "Refer to Planogram",position: "1"}, is_new: true },
          {publication: {display_name: "Hello and Hello Fashion Monthly Pack",type: "Magazines"}, placement: {type: "Special Issue Space",location: "Refer to Planogram",position: "2"}, is_new: false },
          {publication: {display_name: "This is now range (See plan - should be TAB Monthly)",type: "Magazines"}, placement: {type: "Special Issue Space",location: "Refer to Planogram",position: "3"}, is_new: false },

          {publication: {display_name: "Crochet Creative",type: "Magazines"}, placement: {type: "Partworks",location: "Site on Base plinth of the magazine fixture in the designed area",position: "3", info: "Portsmount/Swansea"}, is_new: false },

          {publication: {display_name: "LOL Surprise Trading Cards",type: "Magazines"}, placement: {type: "Collectibles",location: "Kiosk Title",position: "1"}, is_new: false },
          {publication: {display_name: "LOL Surprise Trading Cards Starter Pack",type: "Magazines"}, placement: {type: "Collectibles",location: "Base Plinth Title",position: "1"}, is_new: false },
          {publication: {display_name: "Match Attax Trading Cards",type: "Magazines"}, placement: {type: "Collectibles",location: "Kiosk Title",position: "2"}, is_new: false },
          {publication: {display_name: "Match Attax Trading Cards Starter Pack",type: "Magazines"}, placement: {type: "Collectibles",location: "Base Plinth Title",position: "2"}, is_new: false },

          {publication: {display_name: "Soccerstarz",type: "Magazines"}, placement: {type: "Clipstrip",location: "2m Base +",position: "1"}, is_new: true },
          {publication: {display_name: "Take a Break Pocket Puzzles",type: "Magazines"}, placement: {type: "Clipstrip",location: "3m Base +",position: "2"}, is_new: false },

          {publication: {display_name: "Superkings series 3 single pack",type: "Magazines"}, placement: {type: "Kids Side Rack",location: "Kids Side Rack",position: "1"}, is_new: false },
          {publication: {display_name: "Match Attax (when new season arrives)",type: "Magazines"}, placement: {type: "Kids Side Rack",location: "Kids Side Rack",position: "2"}, is_new: false },
          {publication: {display_name: "Soccerstarz Blister Pack",type: "Magazines"}, placement: {type: "Kids Side Rack",location: "Kids Side Rack",position: "3"}, is_new: false },


        ],
        need_to_return: [
          {display_name: "Spiderman",type: "Magazines"},
          {display_name: "Tour de France",type: "Magazines"},
          {display_name: "Ultimate Dot to Dot",type: "Magazines"},
          {display_name: "FTL Friends",type: "Magazines"},
          {display_name: "Real Homes",type: "Magazines"}
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
