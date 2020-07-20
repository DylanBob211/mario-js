import {Vec2} from './math.js';

export class Trait {
    constructor(name) {
        this.NAME = name;
    }

    update() {
        console.warn('non hai messo un metodo update nel trait')
    }
}

export default class Entity { //crea un oggetto con posizione e velocita x e y
    constructor(){
        this.pos = new Vec2(0,0);
        this.vel = new Vec2(0,0);

        this.traits = [];
    }
    addTrait(trait) {
        this.traits.push(trait);
        this[trait.NAME] = trait;

    }


    update(deltaTime) {
        this.traits.forEach( trait => {
            trait.update(this, deltaTime);
        })
    }
}