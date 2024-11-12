
import {Grid} from "./models/Grid";

export class GameOfLife {
    grid: Grid;

    constructor(width: number, height: number)
    {
        this.grid = new Grid(width, height);
    }

    nextGeneration(): void 
    {
        const newGrid = new Grid(this.grid.width, this.grid.height);

        for (let y = 0; y < this.grid.height; y++){
            for (let x = 0; x < this.grid.width; x++){
                const AliveNearby = this.grid.countAliveNearby(x, y);
                const isAlive = this.grid.getCell(x, y) ===1;

                if (isAlive && (AliveNearby === 2 || AliveNearby === 3) )
                {
                    newGrid.setCell(x, y, 1); //cell alive
                    
                }else if (!isAlive && AliveNearby === 3)
                {
                    newGrid.setCell(x,y, 1); //make alive
                }else{
                    newGrid.setCell(x, y, 0);//dead
                }
            }
        }

        this.grid = newGrid;
    }

    //display current state
    printGrid(): void{
        console.clear();
        console.log(
            this.grid.cells
            .map(row => row.map(cell =>(cell ? "█" : " ")).join(" "))
            .join("\n")
        );
    }

    //og pattern within grid
    setInitialPattern(pattern: Array < {x : number; y: number}>): void
    {
        pattern.forEach(({ x, y }) => {
            this.grid.setCell(x,y,1);
        });
    }
    
}