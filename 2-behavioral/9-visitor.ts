/**
 * Problem: to separate algorithms from the objects on which they operate.
 * Note: Works on double dispatch - https://refactoring.guru/design-patterns/visitor-double-dispatch
 * 
 */


interface Visited {
    value: number;
    accept(v: Visitor): void;
}

interface Visitor {
    visitForA(v: Visited): void;
    visitForB(v: Visited): void;
}

const elementA: Visited = {
    value: 2,
    accept(v) {
        v.visitForA(this)
    },
}
const elementB: Visited = {
    value: 3,
    accept(v) {
        v.visitForB(this)
    },
}

const visitor: Visitor = {
    visitForA(v) {
        console.log(`[Visitor]: Visited A, value: ${v.value}`)
    },
    visitForB(v) {
        console.log(`[Visitor]: Visited B, value: ${v.value}`)
    },
}

elementA.accept(visitor); // [Visitor]: Visited A, value: 2
elementB.accept(visitor); // [Visitor]: Visited B, value: 3