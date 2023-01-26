function getBaseStat(answer, question) {
    const extras = [
        {
            extras: {
                "dance": 4,
                "dancing": 4,
                "sing": 4,
                "singing": 4,
                "tap": 2,
                "tapping": 2,
                "drink": 4,
                "hum": 2,
                "humming": 2,
                "stay": 5,
                "along": 2,
                "bust": 2,
                "move": 2,
                "hang": 2,
                "talk": 4,
                "eat": 1,
                "leave": -5,
                "head": -2,
                "corner": -3,
                "home": -5,
                "drive": -2,
                "hide": -4,
                "quiet": -2 
            }
        },
        {
            extras: {
                "run": 4,
                "train": 5,
                "prepare": 5,
                "exercise": 3,
                "practice": 4,
                "sweat": 4,
                "accept": 5,
                "participate": 3,
                "enjoy": 5,
                "skip": -4,
                "no": -4,
                "leave": -5,
                "don’t": -5,
                "wouldn’t": -5 
            }
        },
        {
            extra: {
                "fine": 4,
                "ok": 4,
                "skip": 5,
                "no": 3,
                "home": 5,
                "pain": 5,
                "broke": 3,
                "hospital": -5,
                "broken": -3,
                "doctor": -4,
                "nurse": -4,
                "killer": -3,
                "fractured": -3,
                "fined": -2,
                "money": -2,
                "cast": -4
            }
        },
        {
            extra: {
                "accept": 4,
                "take": 3,
                "gamble": 5,
                "answer": 5,
                "knowledge": 5,
                "more": 5,
                "cash": 3,
                "money": 3,
                "savings": 4,
                "know": 4,
                "yes": 3,
                "participate": 3,
                "no": -5,
                "fine": -4,
                "leave": -5,
                "deny": -3,
                "ok": -2
            }
        },
        {
            extra: {
                "live": 2,
                "explore": 1,
                "search": 1,
                "people": 1,
                "help": 1,
                "travel": 1,
                "survive": 2,
                "continue": 2,
                "walk": 1,
                "find": 2,
                "discover": 2,
                "learn": 3,
                "read": 2,
                "write": 2,
                "kill": -5,
                "suicide": -5,
                "little": -5,
                "bit": -5,
                "death": -5,
                "no": -5,
                "jump": -3,
                "myself": -5,
                "stop": -5,
                "pass": -5,
                "sewer": -5,
            }
        },
        {
            extra: {
                "run": 5,
                "school": 4,
                "yes": 5,
                "time": 2,
                "make": 3,
                "mile": 3,
                "fine": 4,
                "no": -4,
                "drive": -5,
                "ride": -4,
                "walk": -4,
                "late": -5,
                "tardy": -2,
                "skip": -4
            }
        }
    ]

    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var result = sentiment.analyze(answer, extras[question]);

    const random = (min, max) => (Math.random() * (max - min)) + min;

    return ((result.comparative + 1)/2) * 250 * random(0.95, 1.05);
}

module.exports = { getBaseStat };
