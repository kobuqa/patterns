/**
 * Problem: if you need  delay/queue/history/undo operations or requests
 */


interface Command {
    execute(params: unknown): void;
    undo(): void;
}

interface Invoker {
    command: null | Command;
    setCommand(command: Command): void;
    executeCommand(params: unknown): void;
    undoCommand(): void;

}
const invoker: Invoker = {
    command: null,
    setCommand(command: Command) {
        this.command = command
    },
    executeCommand(params: unknown) {
        if(this.command) this.command.execute(params)
    },
    undoCommand() {
        if(this.command) this.command.undo()
    },
};

const receiver = {
    isRunning: false,
    on() {
        this.isRunning = true;
    },
    off() {
        this.isRunning = false;
    }
};

const turnOnCommand: Command = {
   execute() {
    receiver.on()
   },
   undo() {
       receiver.off()
   },

}

invoker.setCommand(turnOnCommand); // set command to execute
invoker.executeCommand(null); // turn on
invoker.undoCommand(); // turn off
