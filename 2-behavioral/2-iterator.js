/**
 *  Problem: to traverse collections/trees/graphs
 */
var collection = ['A', 'B', 'C', 'D'];
var iterator = {
    index: 0,
    collection: [],
    next: function () {
        return this.collection[this.index++];
    },
    hasNext: function () {
        return this.index < this.collection.length;
    },
    iterate: function (collection) {
        this.collection = collection;
        while (this.hasNext()) {
            console.log(this.next());
        }
    }
};
iterator.iterate(collection);
