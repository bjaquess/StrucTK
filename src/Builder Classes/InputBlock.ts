import { GenericCell } from "../Builder Classes/Cell";
// eslint-disable-next-line no-unused-vars
import { FormatTypes, GetFormatType } from "../Builder Classes/Format";

export class InputBlock {
    private cellStack: GenericCell[];
    private inputParameters: GenericCell[];

    constructor() {
        this.cellStack = [];
    }
    
    AddCell(cellType: FormatTypes, contents: string | number, location: [number, number]) {
        let c = new GenericCell();
        c.format = GetFormatType(cellType);
        c.contents = contents;
        c.location = location;
        this.cellStack.push(c)
    }

    AddCellBelow(cellType: FormatTypes, contents: string | number) {
        let c = new GenericCell();
        c.format = GetFormatType(cellType);
        c.contents = contents;
        let newRow = this.cellStack[this.cellStack.length - 1].location[0] + 1;
        let newCol = this.cellStack[this.cellStack.length - 1].location[1];
        c.location = [newRow, newCol];
        this.cellStack.push(c);
    }

    AddParameterCell(cell: GenericCell, location: [number, number]) {
        cell.location = location;
        this.cellStack.push(cell);
    }

    CellStack(): GenericCell[] {
        return this.cellStack
    }

    InputParameters(): GenericCell[] {
        return this.inputParameters
    }
}