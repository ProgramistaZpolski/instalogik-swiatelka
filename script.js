'use strict';

let status = [
    false, // parter
    false, // 1 pietro
    false, // 2 pietro
    false, // 3 pietro
    false, // 4 pietro
    false, // 5 pietro
    false, // 6 pietro
    false, // 7 pietro
    false, // 8 pietro
    false // 9 pietro
];

let preferences = {
    "stepbystep": undefined,
    "times": undefined,
    "lvl0": undefined,
    "lvl1": undefined,
    "lvl2": undefined,
    "lvl3": undefined,
    "lvl4": undefined,
    "lvl5": undefined,
    "lvl6": undefined,
    "lvl7": undefined,
    "lvl8": undefined,
    "lvl9": undefined
};

function $(h) {
    return document.querySelector(h);
}

function beginSimulation() {
    preferences.times = $("#rep").value;
    for (let index = 0; index < 10; index++) {
        preferences[`lvl${index}`] = $(`#lvl${index}`).checked;
        $(`#swiatlo${index}`).classList.remove('zapalone');
    }

    for (let index = 0; index < status.length; index++) {
        status[index] = preferences[`lvl${index}`];
        if (status[index]) {
            $(`#swiatlo${index}`).classList.add('zapalone');
        }
    }

    
        for (let i = 0; i < preferences.times; i++) {
            for (let index = 0; index < status.length; index++) {
                if (status[index]) {
                    status[index] = false;
                }
                else {
                    status[index] = true;
                    index = Infinity;
                }
            }
        }
        console.log(status);
        for (let index = 0; index < status.length; index++) {
            if (status[index] == true) {
                $(`#swiatlo${index}`).classList.add("zapalone");
            } else {
                $(`#swiatlo${index}`).classList.remove("zapalone");
            }
        }
    


}