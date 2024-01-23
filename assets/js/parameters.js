var parametersArray = [{
    addToParameters: "&edible=1",
    content: ["Edible"],
}, {
    addToParameters: "&poisonous=1",
    content: ["Poisonous"],
}, {
    addToParameters: "&indoor=1",
    content: ["Indoor"],
},];

// Relevant to the dynamically generated buttons
var parametersArraySunlight = [{
    addToParameters: [
        "&sunlight=full_sun",
        "&sunlight=sun-part_shade",
        "&sunlight=part-shade",
        "&sunlight=full_shade",
    ],
}, {
    content: ["Sunlight"],
}, {
    // content: ["Sunlight"],
}, {
    contentPlus: ["Full sun", "Medium to full sun", "Part shade", "Full shade" ],
}];

// Relevant to the dynamically generated buttons
var parametersArrayCycle = [{
    addToParameters: [
        "&cycle=annual",
        "&cycle=biannual",
        "&cycle=perennial",
        "&cycle=biennial",
    ],
}, {
    content: ["Cycle"],
}, {
    // content: ["Cycle"],
}, {
    contentPlus: ["annual", "biannual", "perennial", "biennial",]
}];

// Relevant to the dynamically generated buttons
var parametersArrayWatering = [{
    addToParameters: [
        "&watering=frequent",
        "&watering=average",
        "&watering=minimum",
        "&watering=none",
    ],
}, {
    content: ["Watering"],
}, {
    // content: ["Watering"],
}, {
    contentPlus: ["Frequent", "Average", "Minimum", "None",],
}];