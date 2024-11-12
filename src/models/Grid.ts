// type of cells for GOL

export type cellsArray = number[][];

// GOL Clases
export class Grid {
    width: number;
    height: number;
    cells: cellsArray;

    constructor(width: number, height: number)
    {
        this.width = width;
        this.height = height;
        this.cells = this.createGrid();
    }

    //all cells unresponsive
    private createGrid(): cellsArray{
        return Array.from({ length: this.height}, () => Array(this.width).fill(0));
    }

    // specific cell state
    setCell(x: number, y:number, state:number): void{
        if (x >= 0 && x < this.width && y >= 0 && y < this.height)
        {
            if (x>= 0 && x < this.width && y >= 0 && y < this.height)
            {
                this.cells[y][x] = state;
            }
        }
    }

    //current cell state
    getCell(x: number, y:number): number{
        return this.cells[y]?.[x] ?? 0
    }

    //live cell neighbours
    countAliveNearby(x: number, y:number): number{
        let AliveNearby = 0;
        for (let i= -1; i<=1; i++)
        {
            for (let j =-1; j<= 1; j++)
            {
                if (i ===0 && j === 0) continue;
                const nx = x + i;
                const ny = y + j;
            }
        }
        return AliveNearby;
    }


}