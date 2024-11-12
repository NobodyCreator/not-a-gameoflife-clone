"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameOfLife_1 = require("./GameOfLife");
const width = 10;
const height = 10;
const game = new GameOfLife_1.GameOfLife(width, height);
//init pattern
const initialPattern = [
    { x: 4, y: 5 },
    { x: 5, y: 5 },
    { x: 6, y: 5 }
];
setInterval(() => {
    game.printGrid();
    game.nextGeneration();
}, 500);
