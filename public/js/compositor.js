export default class Compositor {
    //gestisce i layer
    //il layer e' una funzione che disegna sul context (che e il canvas PRINCIPALE)
    //questa funzione disegna il buffer del layer desiderato
    constructor() {
        this.layers = [];
    }

    draw(context) {
        this.layers.forEach(layer => {
            layer(context);
        })
    }
}