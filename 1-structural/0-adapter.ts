/**
 * Problem: To adapt incompatible interfaces
 */

interface OldInterface {
  get(): void;
}

interface NewInterface {
  obtain(): void;
}

const oldReader: OldInterface = {
  get() {
    console.log("get old");
  },
};

const newReader: NewInterface = {
  obtain() {
    console.log("get new");
  },
};

const oldToNewAdapter = (a: OldInterface): NewInterface => ({ obtain: a.get });

// clientCode

function getSmth(reader: NewInterface) {
  reader.obtain();
}

getSmth(newReader); // works perfect since it's the same interfaces

// getSmth(oldReader); // error since incompatible interfaces

getSmth(oldToNewAdapter(oldReader)); // works perfect since adapted
