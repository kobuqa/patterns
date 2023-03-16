/**
 * Problem: Instantiation of single instance
 * Note: It's antipatterns since breaking SRP
 */

interface DB {}

let instance: null | DB = null;

function getInstance(): DB {
  if (!instance) instance = "db";

  return instance;
}

const dbOne = getInstance();

const dbTwo = getInstance();

console.log(dbOne === dbTwo); // true
