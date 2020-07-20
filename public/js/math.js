export class Matrix {
    constructor(){
        this.grid = [];

    }
    forEach(callback) {
        this.grid.forEach((column, x) => {
            column.forEach((value, y) => {
                callback(value, x, y);
            });
        });
    }

    get(x, y) {
        const col = this.grid[x];
        if (col) {
            return column[y]; //se column esiste returna la y
        }
        return undefined;
    }

    set(x, y, value) {
        if(!this.grid[x]){ //se quel valore non e stato settato in precedenza
            this.grid[x] = []; //avvia un nuovo array alla posizione x e cerca il valore di y
        }

        this.grid[x][y] = value;
    }
}

window.Matrix = Matrix;

export class Vec2 {
    constructor(x, y){
        this.set(x, y); //crea un oggetto con x e y 
        //che viene immediatamente settato dal metodo set
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }

}