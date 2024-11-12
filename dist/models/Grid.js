"use strict";
// type of cells for GOL
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
// GOL Clases
class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.cells = this.createGrid();
    }
    //all cells unresponsive
    createGrid() {
        return Array.from({ length: this.height }, () => Array(this.width).fill(0));
    }
    // specific cell state
    setCell(x, y, state) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
                this.cells[y][x] = state;
            }
        }
    }
    //current cell state
    getCell(x, y) {
        var _a, _b;
        return (_b = (_a = this.cells[y]) === null || _a === void 0 ? void 0 : _a[x]) !== null && _b !== void 0 ? _b : 0;
    }
    //live cell neighbours
    countAliveNearby(x, y) {
        let AliveNearby = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0)
                    continue;
                const nx = x + i;
                const ny = y + j;
            }
        }
        return AliveNearby;
    }
}
exports.Grid = Grid;
