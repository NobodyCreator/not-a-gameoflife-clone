import { GameOfLife } from "./GameOfLife";

const width = 10;
const height = 10;
const game = new GameOfLife(width, height);

//init pattern
const initialPattern = [

    {x: 4, y: 5},
    {x: 5, y: 5},
    {x: 6, y: 5}
]

setInterval(() => {
    game.printGrid();
    game.nextGeneration();
}, 500 );