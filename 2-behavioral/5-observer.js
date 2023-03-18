/**
 * Problem: Creates subscription mechanism that allows to notify & react to events
 */
var subscriberOne = {
    id: 0,
    update: function (value) {
        console.log("[One]: Got value ".concat(value));
    }
};
var subscriberTwo = {
    id: 0,
    update: function (value) {
        console.log("[Two]: Got value ".concat(value));
    }
};
var publisher = {
    state: '',
    subscribers: [],
    notifyAll: function () {
        var _this = this;
        this.subscribers.forEach(function (subscriber) { return subscriber.update(_this.state); });
    },
    subscribe: function (subscriber) {
        this.subscribers.push(subscriber);
    },
    unsubscribe: function (subscriber) {
        var index = this.subscribers.findIndex(function (sub) { return sub.id === subscriber.id; });
        this.subscribers.splice(index, 1);
    },
    update: function (state) {
        this.state = state;
        this.notifyAll();
    }
};
publisher.subscribe(subscriberOne);
publisher.update('abc');
publisher.subscribe(subscriberTwo);
publisher.update('def');
publisher.unsubscribe(subscriberTwo);
publisher.update('ghi');
