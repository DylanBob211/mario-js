import Compositor from "./compositor.js";
import { Matrix } from "./math.js";

export default class Level {
    constructor(){
        this.comp = new Compositor();
        this.entities = new Set() //si vuole solo una instansiazione, il set rende unico
        this.tiles = new Matrix();
    }

    update(deltaTime) {
        this.entities.forEach(entity => {
            entity.update(deltaTime);
        })
    }
}   