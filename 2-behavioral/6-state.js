/**
 * Problem: Managing huge amount of states. Avoid 'Boolean Explosion'
 * Note: Cant be implemented separately from state machine. Ready solution xState. Even reducer - state machine :)
 * BL: Payment flow, access via subscriptions, etc
 */
var _a;
// ! Example is too simple to provide the profits of state machine. You will discover it on more complex nested states.
// type Action = string
// type NewState = string
// interface State {
//     id: string;
//     on?: Record<Action, NewState>
//     states: Record<string, Required<Omit<State, 'states'>>>
// }
// const stateMachineConfig: State = {
//     id: 'stopLight',
//     states: {
//         red: {
//             id: 'red',
//             on: { YELLOW: 'yellow' }
//         },
//         yellow: {
//             id:  'yellow',
//             on: { GREEN: 'green' }
//         },
//         green: {
//             id: 'green',
//             on: { RED: 'red' }
//         }
//     }
// }
// const createFiniteMachine = (config: State) => {
//     return {
//         state: config.states.red,
//         transition: function (type) {
//             this.state = config.states[this.state.on[type]];
//         }
//     }
// }
// const fsm = createFiniteMachine(stateMachineConfig);
// fsm.transition('YELLOW');
// fsm.transition('GREEN');
// fsm.transition('RED');
var State;
(function (State) {
    State[State["RED"] = 0] = "RED";
    State[State["RED_AND_YELLOW"] = 1] = "RED_AND_YELLOW";
    State[State["GREEN"] = 2] = "GREEN";
    State[State["BLINKING_GREEN"] = 3] = "BLINKING_GREEN";
    State[State["SHORT_YELLOW"] = 4] = "SHORT_YELLOW";
})(State || (State = {}));
var stopLight = {
    state: State.RED,
    "do": function () {
        this.config[this.state]["do"].bind(this)();
    },
    config: (_a = {},
        _a[State.RED] = {
            "do": function () {
                var _this = this;
                console.log('[Stop Light]: Red. Wait.');
                var id = setTimeout(function () {
                    _this.state = State.RED_AND_YELLOW;
                    _this["do"]();
                    clearTimeout(id);
                }, 3000);
            }
        },
        _a[State.RED_AND_YELLOW] = {
            "do": function () {
                var _this = this;
                console.log('[Stop Light]: Red & Yellow. Be ready.');
                var id = setTimeout(function () {
                    _this.state = State.GREEN;
                    _this["do"]();
                    clearTimeout(id);
                }, 2000);
            }
        },
        _a[State.GREEN] = {
            "do": function () {
                var _this = this;
                console.log('[Stop Light]: Green. You can ride.');
                var id = setTimeout(function () {
                    _this.state = State.BLINKING_GREEN;
                    _this["do"]();
                    clearTimeout(id);
                }, 5000);
            }
        },
        _a[State.BLINKING_GREEN] = {
            "do": function () {
                var _this = this;
                console.log('[Stop Light]: Blinking green. Finish maneuver.');
                var id = setTimeout(function () {
                    _this.state = State.SHORT_YELLOW;
                    _this["do"]();
                    clearTimeout(id);
                }, 3000);
            }
        },
        _a[State.SHORT_YELLOW] = {
            "do": function () {
                var _this = this;
                console.log('[Stop Light]: Yellow. Stop if you can.');
                var id = setTimeout(function () {
                    _this.state = State.RED;
                    _this["do"]();
                    clearTimeout(id);
                }, 1000);
            }
        },
        _a)
};
stopLight["do"]();
