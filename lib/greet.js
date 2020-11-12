const _ = require("lodash");

const GREETINGS = {
    en: "Hello!",
    de: "Hallo!",
    fr: "Bonjour!",
    es: "Hola!",
    lt: "Labas!",
    it: "Ciao!",
    hr: "Zdravo!",
    cs: "Ahoj!",
    da: "Hej!",
    nl: "Hallo!",
    et: "Tere!",
    fi: "Hei!",
    hu: "Helló!",
    is: "Halló!",
    pt: "Olá!",
    rm: "Salut!",
    sv: "Hallå!",
    tr: "Merhaba!",
};

// greet by the language code
exports.greet = function (code) {
    if (code) {
        // check if value associated with the language code exists
        if (!GREETINGS[code]) {
            return "Error! We don't support this language.";
        } else {
            return GREETINGS[code];
        }
    } else {
        // return greeting in english if code is empty
        return GREETINGS["en"];
    }
};

// greet a random greeting
exports.greetRandom = function () {
    // _.values returns values of objects in array
    // _.sample returns any random item in array
    return _.sample(_.values(GREETINGS));
};
