var Config = {
    baseUrl: 'https://api.horizonnetwork.io/',
    debugLogging: true,
    darkrp: {
        updateInterval: 7200000, // every two hours (7200000 ms)
        prices: {
            singles: {
                max: 1.25,
                min: 0.5
            },
            multiple: {
                max: 1.25,
                min: 0.75
            }
        }
    }
}

module.exports = Config;