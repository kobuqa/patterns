/**
 * Problem: Managing huge amount of states. Avoid 'Boolean Explosion'
 * Note: Cant be implemented separately from state machine. Ready solution xState. Even reducer - state machine :)
 */

type Action = string
type NewState = string

interface State {
    id: string;
    on?: Record<Action, NewState>
    states: Record<string, Required<Omit<State, 'states'>>>
}

const stateMachineConfig: State = {
    id: 'stopLight',
    states: {
        red: {
            id: 'red',
            on: { YELLOW: 'yellow' }
        },
        yellow: {
            id:  'yellow',
            on: { GREEN: 'green' }
        },
        green: {
            id: 'green',
            on: { RED: 'red' }
        }
    }
}

const createFiniteMachine = (config: State) => {
    return {
        state: config.states.red,
        transition: function (type) {
            this.state = config.states[this.state.on[type]];
        }
    }
}

const fsm = createFiniteMachine(stateMachineConfig);

fsm.transition('YELLOW');
fsm.transition('GREEN');
fsm.transition('RED');