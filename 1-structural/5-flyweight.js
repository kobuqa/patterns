/**
 * Problem: To safe memory by sharing common state between multiple objects
 */
var cache = {};
var flyWeightFactory = function (type) {
    if (!cache[type]) {
        cache[type] = { color: type };
        console.log("new created");
        return cache[type];
    }
    console.log("from cache");
    return cache[type];
};
var products = [];
var addProducts = function (type) { return flyWeightFactory(type); };
addProducts("blue"); // new created
addProducts("red"); // new created
addProducts("red"); // from cache
