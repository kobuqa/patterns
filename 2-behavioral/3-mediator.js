/**
 * Problem: lowering coupling via dependency on mediator
 */
var mediator = {
    isPlatformFree: true,
    queue: [],
    notifyDepature: function () {
        this.isPlatformFree = true;
        if (this.queue.length > 0) {
            var first = this.queue[0];
            this.queue = this.queue.slice(1);
            first.permitArrival();
        }
    }
};
var createTrain = function (type) { return ({
    type: type,
    arrive: function () {
        if (!mediator.isPlatformFree) {
            mediator.queue.push(this);
            return console.log("[".concat(type, "]: Platform is blocked. Waiting..."));
        }
        mediator.isPlatformFree = false;
        console.log("[".concat(type, "]: Arrived."));
    },
    depart: function () {
        console.log("[".concat(type, "]: Departured."));
        mediator.notifyDepature();
    },
    permitArrival: function () {
        console.log("[".concat(type, "]: Permission to arrive obtained."));
        this.arrive();
    }
}); };
var trainOne = createTrain('train#1');
var trainTwo = createTrain('train#2');
var trainThree = createTrain('train#3');
trainOne.arrive(); // arrived
trainTwo.arrive(); // busy
trainOne.depart(); // 1 - departured, 2 arrived
trainThree.arrive(); // 3 - busy
trainOne.arrive(); // 1 - busy
trainTwo.depart(); // 2 - departured, 3 - arrived
trainThree.depart(); // 3 - departured, 1 - arrived
trainOne.depart(); // 1 - departured
