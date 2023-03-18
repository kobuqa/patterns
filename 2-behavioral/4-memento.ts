/**
 * Problem: State time traveling or related features to that(ex.: comparing snapshots, undoable)
 */

type Point = {
    x: number;
    y: number;
}

interface Memento<T> {
    state: T
}

interface Originator<T> {
    careTaker: CareTaker<T>
    state: T;
    add(value: T): void;
    undo(): void;
    redo(): void;
}

interface CareTaker<Memento> {
    currentMemento: number;
    history: Memento[];
    undo(): Memento;
    redo(): Memento;
    save(m: Memento): void;
}

const careTaker: CareTaker<Point> = {
    history: [],
    currentMemento: -1,
    save(memento) {
        this.history.push(memento);
        this.currentMemento += 1;
    },
    undo() {
        if(this.history.length > 0) {
            this.currentMemento -= 1;
            return this.history[this.currentMemento]
        }
    },
    redo() {
        if(this.history.length > 0) {
            this.currentMemento += 1;
            return this.history[this.currentMemento]
        }
    },
}

const originator:Originator<Point> = {
    careTaker,
    state: {
        x: 0,
        y: 0
    },
    add(value) {
        this.state = value;
        this.careTaker.save(value)
    },
    undo() {
       this.state = this.careTaker.undo()
    },
    redo() {
        this.state = this.careTaker.redo()
    }
}

originator.add({x: 1, y: 2}); // { x: 1, y: 2 }
originator.add({x: 2, y: 4}); // { x: 2, y: 4 }
originator.undo(); // { x: 1, y: 2 }
originator.redo(); // { x: 2, y: 4 }