/**
 * Problem: lowering coupling via dependency on mediator. Dependency on mediator.
 */

interface Mediator {
    isPlatformFree: boolean;
    queue: any[];
    notifyDepature(): void;
}

const mediator: Mediator = {
    isPlatformFree: true,
    queue: [],
    notifyDepature() {
        this.isPlatformFree = true;
        if(this.queue.length > 0) {
            const first = this.queue[0];
            this.queue = this.queue.slice(1);
            first.permitArrival()
        }
    }
}

const createTrain = (type: string) => ({
    type,
    arrive() {
        if(!mediator.isPlatformFree)  {
            mediator.queue.push(this);
           return  console.log(`[${type}]: Platform is blocked. Waiting...`)
        } 
        mediator.isPlatformFree = false;
        console.log(`[${type}]: Arrived.`)
    },
    depart() {
        console.log(`[${type}]: Departured.`)
        mediator.notifyDepature();
    },
    permitArrival() {
        console.log(`[${type}]: Permission to arrive obtained.`)
        this.arrive();
    }
})

const trainOne = createTrain('train#1')
const trainTwo = createTrain('train#2')
const trainThree = createTrain('train#3')

trainOne.arrive(); // arrived
trainTwo.arrive(); // busy
trainOne.depart(); // 1 - departured, 2 arrived
trainThree.arrive(); // 3 - busy
trainOne.arrive(); // 1 - busy
trainTwo.depart(); // 2 - departured, 3 - arrived
trainThree.depart(); // 3 - departured, 1 - arrived
trainOne.depart(); // 1 - departured