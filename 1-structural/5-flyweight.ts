/**
 * Problem: To safe memory by sharing common state between multiple objects
 * How: passing common state by refference or via cache
 */

type FlyweightType = "red" | "blue";

type Product = {
  color: FlyweightType;
};

const cache: Record<string, Product> = {};

const flyWeightFactory = (type: FlyweightType) => {
  if (!cache[type]) {
    cache[type] = { color: type };
    console.log("new created");
    return cache[type];
  }
  console.log("from cache");
  return cache[type];
};

const products = [];

const addProducts = (type: FlyweightType) => flyWeightFactory(type);

addProducts("blue"); // new created
addProducts("red"); // new created
addProducts("red"); // from cache
