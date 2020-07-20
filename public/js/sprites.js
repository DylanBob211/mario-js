import SpriteSheet from './spritesheet.js';
import {loadImage} from './loaders.js';

//ritorna una promessa
export function loadBackgroundSprites() {
    //manda in output l'intera catena di promesse
    return loadImage('/public/img/tiles.png')
    .then(image => {//ne printa uno nella posizione x e y

        const sprites = new SpriteSheet(image, 16, 16);
        sprites.defineTile('ground', 0, 0); //usa il metodo define per definire quale blocco si chiama 'ground' (il blocco di terra sul file png e' alla posizione 0,0)
        sprites.defineTile('sky', 3, 23);//loadBackgroundSprites
        return sprites; //vogliamo un output cosi da poterlo utilizzare con il metodo static dell'oggetto promessa
    })
}
export function loadMarioSprite() {
    return loadImage('/public/img/characters.gif')
    .then(image => {

        const sprites = new SpriteSheet(image, 16, 16);
        sprites.define('idle', 276, 44, 16, 16); 
        return sprites; 
    })
}