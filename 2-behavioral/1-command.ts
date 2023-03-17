/**
 * Problem: if you need  delay/queue/history/undo operations or requests
 */


interface Command {
    execute(): void;
    undo(): void;
}

interface Invoker {
    execute(command: Command): void;
    undo(): void;

}
const commandHistory: Command[] = [];

const invoker: Invoker = {
    execute(command: Command) {
       command.execute()
       commandHistory.push(command)
    },
    undo() {
        const command = commandHistory.pop();
        if (command) command.undo()
    },
};

const receiver = { // Business logic
    total: 5,
    add(amount: number) {
        this.total += amount;
   },
   subtract(amount: number) {
    this.total -= amount;
   }
};

const addTen: Command = { // Command #1
   execute() {
    receiver.add(10)
   },
   undo() {
    receiver.subtract(10)
   },
}

const minusThree: Command = { // Command #2
    execute() {
     receiver.subtract(3)
    },
    undo() {
     receiver.add(3)
    },
 }

invoker.execute(addTen); // 15
invoker.execute(minusThree); // 12
invoker.execute(minusThree); // 9
invoker.execute(addTen); // 19
invoker.execute(minusThree); // 16
invoker.undo(); // 19
invoker.undo(); // 9