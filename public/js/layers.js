
export function createBackgroundLayer(level, sprites){
    //creiamo un buffer per il background
    const buffer = document.createElement('canvas');
    buffer.width = 256;
    buffer.height = 240;
    
    const context = buffer.getContext("2d");

    level.tiles.grid.forEach((column, x) => {
        column.forEach((tile, y) => {
            sprites.drawTile(tile.name, context, x, y);
        })
    })
    
    return function drawBackgroundLayer(context) {
        context.drawImage(buffer, 0, 0)
    }//mandiamo un output che poi finisce nell'array dei layer
}

export function createSpriteLayer(entities) {
    return function drawSpriteLayer(context) {
        entities.forEach(entity => {
            entity.draw(context);
    })
    }
}