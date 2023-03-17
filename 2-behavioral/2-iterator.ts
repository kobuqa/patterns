/**
 *  Problem: to traverse collections/trees/graphs
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