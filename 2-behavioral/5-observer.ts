/**
 * Problem: Creates subscription mechanism that allows to notify & react to events
 * Ready solution: Event Emitter in Node or alternative lib
 */


interface Subscriber {
    id: number;
    update(value: string): void;
}

interface Publisher {
    state: string
    subscribers: Subscriber[],
    notifyAll(): void;
    subscribe(subscriber: Subscriber): void
    unsubscribe(subscriber: Subscriber): void
    update(state: string): void;
}

const subscriberOne: Subscriber = {
    id: 0,
    update(value) {
        console.log(`[One]: Got value ${value}`)
    },
}

const subscriberTwo: Subscriber = {
    id: 0,
    update(value) {
        console.log(`[Two]: Got value ${value}`)
    },
}

const publisher: Publisher = {
    state: '',
    subscribers: [],
    notifyAll() {
        this.subscribers.forEach(subscriber => subscriber.update(this.state))
    },
    subscribe(subscriber) {
        this.subscribers.push(subscriber)
    },
    unsubscribe(subscriber) {
        const index = this.subscribers.findIndex(sub => sub.id === subscriber.id)
        this.subscribers.splice(index, 1)
    },
    update(state) {
        this.state = state;
        this.notifyAll()
    },
}

publisher.subscribe(subscriberOne);
publisher.update('abc'); // [One]: Got value abc
publisher.subscribe(subscriberTwo);
publisher.update('def'); // [One]: Got value def & [Two]: Got value def
publisher.unsubscribe(subscriberTwo);
publisher.update('ghi'); // [Two]: Got value ghi

