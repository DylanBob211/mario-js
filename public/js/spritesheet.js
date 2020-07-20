//sprite API
export default class SpriteSheet {
    //prende un immagine, una larghezza pixel e una altezza pixel
    //in questo caso w e h sono 16px e 16px, vedi sotto
    constructor(image, width, height) {
        //li setta come valori
        this.image = image;
        this.width = width;
        this.height = height;
        //crea un oggetto Map (array di coppie key/value)
        //in questo caso il nome tile e il suo piccolo buffer
        this.tiles = new Map();
    }
    //metodo per definire quale pezzo dell'intero png va messo nel buffer 
    //da un nome al tile e gli assegna il buffer
    //chiede anche la posizione x e y
    define(name, x, y, width, height){
        //il buffer e' un minicanvas che contiene un certo tile
        const buffer = document.createElement('canvas');
        buffer.width = width; //16px w minicanvas
        buffer.height = height; //16px h minicanvas
        buffer
            .getContext('2d')
            .drawImage( //printa l'immagine ??? vedi sotto
                this.image, //quale
                x,
                y,
                width,
                height,
                0,
                0,
                width,
                height);
        this.tiles.set(name, buffer); 
        //alla fine salva la coppia k/v cosi da essere facilmente accessibile
    }
    defineTile(name, x, y){
        this.define(name, x * this.width, y * this.height, this.width, this.height)
    }
    //metodo che disegna il buffer sul canvas originario
    draw(name, context, x, y) {
        //riprende il k/v con get dell'oggetto instanziato map
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y); //disegna alla posizione x e y sul context
    }    

    drawTile(name, context, x, y) {
        this.draw(name, context, x * this.width, y * this.height);
    }
}