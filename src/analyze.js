function getBaseStat(answer) {
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var result = sentiment.analyze(answer);

    return ((result.comparative + 5)/10) * 255;
}

module.exports = { getBaseStat };
