/**
 * Problem: making item generating exact copy withour calling an constructor or class instantiating
 */

const sheep = {
  name: "Dolly",
};

const makeClonable = (item) => {
  Object.setPrototypeOf(item, {
    clone() {
      const cloneItem = structuredClone(item); // Or Object.assign | Spread | JSON.parse(JSON.stringify(object))
      Object.setPrototypeOf(cloneItem, this);

      return cloneItem;
    },
  });

  return item;
};

const clonableSheep = makeClonable(sheep);

const clone = clonableSheep.clone();
const clone2 = clone.clone();
const clone3 = clone2.clone();
