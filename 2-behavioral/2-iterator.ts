/**
 *  Problem: to traverse collections/trees/graphs
 *  NOTE: You can just use [Symbol.Iterator]() {} JS core feature instead of that - https://learn.javascript.ru/iterator
 *  But for more complext things - u've to implement your own(depth traverse, width traverse of tree)
 */


interface ArrayIterator {
    index: number;
    collection: unknown[];
    next(): unknown;
    hasNext(): boolean;
    iterate(collection: unknown[]): void;
}

const collection = ['A', 'B', 'C', 'D'];

const arrayIterator: ArrayIterator = {
    index: 0,
    collection: [],
    next() {
        return this.collection[this.index++];
    },
    hasNext() {
        return this.index < this.collection.length
    },
    iterate(collection: any[]) {
        this.collection = collection;
        while(this.hasNext()) {
            console.log(this.next())
        }
    }
}

arrayIterator.iterate(collection);
/**
 * A
 * B
 * C
 * D
 */