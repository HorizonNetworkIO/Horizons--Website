const e = require('express');
var config = require('./../config');
var twitter = require('./twitter');

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

class DarkRP {
    constructor() {
        this.config = {};
        this.config.shipment_single = 1;
        this.config.shipment_multiple = 1;

        this.config.last_shipment_single = 1;
        this.config.last_shipment_multiple = 1;

        setInterval(this.updateConfig.bind(this), config.darkrp.updateInterval);

        this.updateConfig();
    }

    updateConfig() {
        let goUp = Math.random() > 0.55;
        let doBoom = Math.random() > 0.9;

        let singleRandom = Math.random();
        let multipleRandom = Math.random();

        // singleRandom = clamp(singleRandom, config.darkrp.prices.singles.min, config.darkrp.prices.singles.max);
        // multipleRandom = clamp(multipleRandom, config.darkrp.prices.multiple.min, config.darkrp.prices.multiple.max);

        if (!doBoom) {
            singleRandom *= 0.2;
            multipleRandom *= 0.2;
        } else {
            singleRandom *= 0.45;
            multipleRandom *= 0.45;
        }

        this.config.last_shipment_multiple = this.config.shipment_multiple;
        this.config.last_shipment_single = this.config.shipment_single;

        // change values
        if (goUp) {
            this.config.shipment_single += singleRandom;
            this.config.shipment_multiple += multipleRandom;
        }
        else {
            this.config.shipment_single -= singleRandom;
            this.config.shipment_multiple -= multipleRandom;
        }
        
        // clamp
        this.config.shipment_multiple = clamp(this.config.shipment_multiple, config.darkrp.prices.multiple.min, config.darkrp.prices.multiple.max);
        this.config.shipment_single = clamp(this.config.shipment_single, config.darkrp.prices.singles.min, config.darkrp.prices.singles.max);

        // round
        this.config.shipment_single = Math.round(this.config.shipment_single * 100) / 100;
        this.config.shipment_multiple = Math.round(this.config.shipment_multiple * 100) / 100;

        // check difference between last and current value
        let singleDiff = this.config.shipment_single - this.config.last_shipment_single;
        let multipleDiff = this.config.shipment_multiple - this.config.last_shipment_multiple;
        let singleGoingDown = singleDiff < 0;
        let multipleGoingDown = multipleDiff < 0;

        // send tweet
        if (Math.abs(singleDiff) > 0.15) {
            let message = "Single Weapon Prices has changed! : " + (this.config.shipment_single * 100) + "% (" + (singleGoingDown ? "-" : "+") + (Math.round(Math.abs(singleDiff) * 100) / 100) * 100 + "%)";
            twitter.Tweet(message);
        }

        if (Math.abs(multipleDiff) > 0.15) {
            let message = "Weapon Shipment Prices has changed! : " + (this.config.shipment_multiple * 100) + "% (" + (multipleGoingDown ? "-" : "+") + (Math.round(Math.abs(multipleDiff) * 100) / 100) * 100 + "%)";
            twitter.Tweet(message);
        }
    }

    getShipmentSingle() {
        return this.config.shipment_single;
    }

    getShipmentMultiple() {
        return this.config.shipment_multiple;
    }
}

module.exports = DarkRP;