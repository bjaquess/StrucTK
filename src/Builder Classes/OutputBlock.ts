import { GenericCell } from "../Builder Classes/Cell";
// eslint-disable-next-line no-unused-vars
import { FormatType, GetFormatType } from "../Builder Classes/Format";

export class OutputBlock {
    relativeInputBlockOrigin: [number, number];

    private cellStack: GenericCell[];
    private row: number = 0;
    private col: number = 0;

    constructor() {
        this.cellStack = []
    }

    FormatStack(): GenericCell[] {
        let formatStack: GenericCell[] = [];
        this.cellStack.forEach(_cell => {
            let currentRow = _cell.location[0];
            let currentCol = _cell.location[1];
            let newRow = currentRow - this.relativeInputBlockOrigin[0];
            let newCol = currentCol - this.relativeInputBlockOrigin[1];
            let newCell = new GenericCell();
            newCell.format = _cell.format;
            newCell.location = [newRow, newCol];
            formatStack.push(newCell);
        })
        return formatStack;
    }

    FormulaLocation(): [number, number] {
        let row: number = 0 - this.relativeInputBlockOrigin[0];
        let col: number = 0 - this.relativeInputBlockOrigin[1];
        return [row, col];
    }
    
    AddCellRightOfLast(cellType: FormatType) {
        this.AddCellRelativeToLast(cellType, [0,1]);
    }

    AddCellCurrentLocation(cellType: FormatType) {
        let c = new GenericCell();
        c.format = GetFormatType(cellType);
        c.location = [this.row, this.col];
        this.cellStack.push(c)
    }

    AddCellRelativeToLast(cellType: FormatType, relativeLocation: [number, number]) {
        let c = new GenericCell();
        c.format = GetFormatType(cellType);
        this.row = this.row + relativeLocation[0];
        this.col = this.col + relativeLocation[1];
        c.location = [this.row, this.col];
        this.cellStack.push(c);
    }

    CellStack(): GenericCell[] {
        return this.cellStack
    }
}