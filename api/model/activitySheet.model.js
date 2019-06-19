const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var publication = new Schema({
    display_name: {
        type: String
    },
    type: {
      // e.g. "Magazines"
        type: String
    }
});

var placement = new Schema({
  type: {
    // e.g. "We Recommend Units", "Special Issue Space", "Partworks", "Collectibles", "Clipstrips", "Kids Side Rack", "Parasite Unit", "Other Off Fixture Space", "Superquad", "Checkout Unit", "Queuing Aisle"
      type: String
  },
  location: {
    // e.g. "Magazine Fixture"
      type: String
  },
  position: {
    // e.g. 4
      type: Number
  },
  info: {
    // e.g. "National/Test Area"
      type: String
  },
});

var action = new Schema({
    publication: {
        type: publication
    },
    placement: {
        type: placement
    },
    is_new: {
      // e.g. true
        type: Boolean
    }
});

let ActivitySheet = new Schema({
    store_id: {
        type: String
    },
    range_start_date: {
        type: Date
    },
    range_end_date: {
        type: Date
    },
    week: {
        type: Number
    },
    weekly_news: {
        type: String
    },
    actions: [{
        type: action
    }],
    need_to_return: [{
        type: publication
    }],
    update_timestamp: {
        type: Date
    }

});

module.exports = mongoose.model('ActivitySheet', ActivitySheet);
