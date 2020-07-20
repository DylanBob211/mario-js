const PRESSED = 1;
const RELEASED = 0;
export default class KeyboardState {
    constructor() {
        this.keyStates = new Map(); //mi dira' se il bottone e premuto
        this.keyMap = new Map(); //tiene la funzione di un certo tasto premuto e il suo tasto
    }

    addMapping(keyCode, callback) {
        this.keyMap.set(keyCode, callback);
    }

    handleEvent(event) {
        const {keyCode} = event; //for the purpose of this method we need to exctract the keycode drom the map

        if (!this.keyMap.has(keyCode)) { 
            // se non ha il tasto mappato, inserito nell'array dei tasti disponibili
            return;
        }

        event.preventDefault() //nel caso il tasto fosse mappato, previene la funzione effettiva nel browser del tasto

        const keyState = event.type === 'keydown' ? PRESSED : RELEASED;
        
        if (this.keyStates.get(keyCode) === keyState) {
            return;
        }

        this.keyStates.set(keyCode, keyState);
        console.log(keyState);
        this.keyMap.get(keyCode)(keyState);//lo chiama subito

    }

    listenTo(window) {
        ['keydown', 'keyup'].forEach(eventName => {
        window.addEventListener( eventName, event =>{
            this.handleEvent(event);
        })
    })
    }
}