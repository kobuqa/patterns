/**
 * Problem: Managing huge amount of states. Avoid 'Boolean Explosion'
 * Note: Cant be implemented separately from state machine. Ready solution xState. Even reducer - state machine :)
 * BL: Payment flow, access via subscriptions, etc
 * Video: https://youtu.be/mxz7_zcip0c
 */

// ! Example is too simple to provide the profits of state machine. You will discover it on more complex nested states.

enum State {
    RED,
    RED_AND_YELLOW,
    GREEN,
    BLINKING_GREEN,
    SHORT_YELLOW
}

const stopLight  = {
    state: State.RED,
    do(){
        this.config[this.state].do.bind(this)()
    },
    config: {
        [State.RED]: {
            do: function() {
                console.log('[Stop Light]: Red. Wait.')
                const id = setTimeout(() => {
                    this.state = State.RED_AND_YELLOW
                    this.do()
                    clearTimeout(id)
                 }, 3000)
            } 
        },
        [State.RED_AND_YELLOW]: {
                do: function() {
            console.log('[Stop Light]: Red & Yellow. Be ready.')
                const id = setTimeout(() => {
                    this.state = State.GREEN
                    this.do()
                    clearTimeout(id)
                 }, 2000)
            } 
        },
        [State.GREEN]: {
            do: function() {
                console.log('[Stop Light]: Green. You can ride.')
                const id = setTimeout(() => {
                    this.state = State.BLINKING_GREEN
                    this.do()
                    clearTimeout(id)
                 }, 5000)
            }
        },
        [State.BLINKING_GREEN]: {
            do: function() {
                console.log('[Stop Light]: Blinking green. Finish maneuver.')
                const id = setTimeout(() => {
                    this.state = State.SHORT_YELLOW
                    this.do()
                    clearTimeout(id)
                 }, 3000)
            }
        },
        [State.SHORT_YELLOW]: {
            do: function() {
                console.log('[Stop Light]: Yellow. Stop if you can.')
                const id = setTimeout(() => {
                    this.state = State.RED
                    this.do()
                    clearTimeout(id)
                 }, 1000)
            }
        }
    }
}

stopLight.do();
