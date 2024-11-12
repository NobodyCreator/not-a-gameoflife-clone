"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameOfLife = void 0;
const Grid_1 = require("./models/Grid");
class GameOfLife {
    constructor(width, height) {
        this.grid = new Grid_1.Grid(width, height);
    }
    nextGeneration() {
        const newGrid = new Grid_1.Grid(this.grid.width, this.grid.height);
        for (let y = 0; y < this.grid.height; y++) {
            for (let x = 0; x < this.grid.width; x++) {
                const AliveNearby = this.grid.countAliveNearby(x, y);
                const isAlive = this.grid.getCell(x, y) === 1;
                if (isAlive && (AliveNearby === 2 || AliveNearby === 3)) {
                    newGrid.setCell(x, y, 1); //cell alive
                }
                else if (!isAlive && AliveNearby === 3) {
                    newGrid.setCell(x, y, 1); //make alive
                }
                else {
                    newGrid.setCell(x, y, 0); //dead
                }
            }
        }
        this.grid = newGrid;
    }
    //display current state
    printGrid() {
        console.clear();
        console.log(this.grid.cells
            .map(row => row.map(cell => (cell ? "█" : " ")).join(" "))
            .join("\n"));
    }
    //og pattern within grid
    setInitialPattern(pattern) {
        pattern.forEach(({ x, y }) => {
            this.grid.setCell(x, y, 1);
        });
    }
}
exports.GameOfLife = GameOfLife;
