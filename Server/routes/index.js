var express = require('express');
var router = express.Router();
var darkrp = require('../base/darkrp');

var DarkRP = new darkrp();

router.get("/", function(req, res) {
    res.send("Hello, World!");
});

router.get("/prices", function(req, res) {
    // send json
    res.json({
        shipment_single: DarkRP.getShipmentSingle(),
        shipment_multiple: DarkRP.getShipmentMultiple() 
    });
});

module.exports = router;