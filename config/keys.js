if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}

/*module.exports = {
  mongoURI:
    "mongodb://outcan_devconnector:RcQdBfKFMsFeCY@ds217970.mlab.com:17970/outcan-devconnector",
  secretKey: "YoYoYolandeMyKey"
};*/
