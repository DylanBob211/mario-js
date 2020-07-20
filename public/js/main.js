import Timer from './timer.js'
import {loadLevel} from './loaders.js';
import {createMario} from './entities.js';
import KeyboardState from './keyboardState.js';





const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');



//prende un array di promesse e ritorna un array dei risultati di quelle promesse in ordine che vengono usate in una funzione
//queste due funzione vanno in parallelo
Promise.all([
    createMario(),
    loadLevel('1-1')
])
//utilizza gli sprites della funzione loadBackgroundSprites
//utilizza il fetching del file json della funzione loadLevel 
//li usa per disegnare il bg con la funzione drawBackground
//la funzione drawBackround e reiterata con forEach per disegnare ogni elemento dell'array backgrounds nel file json
.then(([mario, level]) => {
        

   
    const gravity = 2000;
    mario.pos.set(64, 180); //usa il metodo set di vec2
    mario.vel.set(200, -600); //ereditato in Entity


    level.entities.add(mario);

    const SPACE = 32;
    const input = new KeyboardState();
    input.addMapping(SPACE, keyState => {
        console.log(keyState)
        if(keyState) {
            mario.jump.start();
        } else {
            mario.jump.cancel();
        }
    });
    input.listenTo(window);


    

    const timer = new Timer(1/60);

    timer.update = function update(deltaTime) {

        level.update(deltaTime);

        level.comp.draw(context);

        mario.vel.y += gravity * deltaTime;
    }


    timer.start(0);

})
//carica l'immagine con tutti i tiles

    

    

