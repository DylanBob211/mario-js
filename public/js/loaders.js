import Level from './level.js'
import {createBackgroundLayer, createSpriteLayer} from './layers.js'
import {loadBackgroundSprites} from './sprites.js';


//funzione che prende l'url di un immagine
export function loadImage(url){
    //crea una promessa
    return new Promise(resolve => {
        //se la promessa risolve mette un <img> sul file html
        const image = new Image();
        //che viene sparata quando e se (e' un Promise) la pagina viene caricata ('load')
        image.addEventListener('load', () => {
            resolve(image);
        });
        //appena viene aggiunto l'<img> gli viene aggiunto l'attr src="url"
        image.src = url;
    });
}

function createTiles(level, backgrounds){
    backgrounds.forEach(background => {
        background.ranges.forEach(([x1, x2, y1, y2]) => {
            for (let x = x1; x < x2; ++x) {
                for(let y = y1; y < y2; ++y) {
                    level.tiles.grid.set(x, y, {
                        name: backgrounds.tile,
                    });
                }
            }
        });
    });
}



export function loadLevel(name){
    return Promise.all([
        fetch(`/public/levels/${name}.json`)
        .then(r => r.json()),

        loadBackgroundSprites()

    ])
    //va a prendere il file dal nome scelto nella cartella levels
    .then(([levelSpec, backgroundSprites]) => {

        const level = new Level();

        createTiles(level, levelSpec.backgrounds);

        const backgroundLayer = createBackgroundLayer(level, backgroundSprites);
        level.comp.layers.push(backgroundLayer);

        const spriteLayer = createSpriteLayer(level.entities);
        level.comp.layers.push(spriteLayer);

        console.table(level.tiles.grid);

        return level;
    });
}


    