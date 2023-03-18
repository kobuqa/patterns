/**
 * Problem: To turns a set of behaviors into objects and makes them interchangeable inside original context object
 */


interface EvictionAlgo {
    evict(cache: Cache): void
}

const lru: EvictionAlgo = { // strategy #1
    evict(cache) {
        console.log(`[LRU]: Evicting by lru strtegy`)
    },
} 
const fifo: EvictionAlgo = { // strategy #2
    evict(cache) {
        console.log(`[Fifo]: Evicting by fifo strtegy`)
    },
}
const lfu: EvictionAlgo = { // strategy #3
    evict(cache) {
        console.log(`[LFU]: Evicting by lfu strtegy`)
    },
}

interface Cache {
    storage: Record<string, unknown>
    evictionAlgo: EvictionAlgo
    capacity: number;
    maxCapacity: number;
}

const cache = {
    storage: {},
    evictionAlgo: lru, // strategy
    capacity: 0,
    maxCapacity: 2,
    setEvictionAlgo(e: EvictionAlgo) {
        this.evictionAlgo = e
    },
    add(key: string, value: unknown) {
        if (this.capacity == this.maxCapacity) this.evict();
        this.capacity++;
        this.storage[key] = value;
    },
   evict() {
        this.evictionAlgo.evict(this);
        this.capacity--;
    }
}

cache.add('a', 1);
cache.add('b', 2);
cache.add('c', 3); // [LRU]: Evicting by lru strtegy
cache.setEvictionAlgo(fifo);
cache.add('d', 4); // [Fifo]: Evicting by fifo strtegy
cache.setEvictionAlgo(lfu); // 
cache.add('e', 5); // [LFU]: Evicting by lfu strtegy