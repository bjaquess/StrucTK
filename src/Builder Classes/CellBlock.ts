import { GenericCell } from "./Cell";
// eslint-disable-next-line no-unused-vars
import { FormatType, GetFormatType } from "./Format";

export class CellBlock {
    CellStack: GenericCell[];

    constructor() {
        this.CellStack = []
    }

    AddCell(c: GenericCell) {
        this.CellStack.push(c)
    }

    AddNewCell(format: FormatType, location: [number, number], contents: string | number) {
        let c = new GenericCell();
        c.location = location;
        c.contents = contents;
        c.format = GetFormatType(format);
        this.CellStack.push(c)
    }

    RightOfLast(): [number, number] {
        let location: [number, number];
        let lastLocation: [number, number];
        lastLocation = this.CellStack[this.CellStack.length - 1].location;
        let row = lastLocation[0];
        let col = lastLocation[1] + 1;
        location = [row, col];
        return location
    }

    BelowLast(): [number, number] {
        let location: [number, number];
        let lastLocation: [number, number];
        lastLocation = this.CellStack[this.CellStack.length - 1].location;
        let row = lastLocation[0] + 1;
        let col = lastLocation[1];
        location = [row, col];
        return location
    }

    AddNewCellRightOfLast(format: FormatType, contents: string | number) {
        let row: number;
        let col: number;
        let lastLoc: [number, number];
        let c = new GenericCell();
        c.format = GetFormatType(format);
        c.contents = contents;
        lastLoc = this.CellStack[this.CellStack.length - 1].location;
        row = lastLoc[0];
        col = lastLoc[1] + 1;
        c.location = [row, col];
        this.CellStack.push(c)
    }

    AddNewCellBelowLast(format: FormatType, contents: string | number) {
        let row: number;
        let col: number;
        let lastLoc: [number, number];
        let c = new GenericCell();
        c.format = GetFormatType(format);
        c.contents = contents;
        lastLoc = this.CellStack[this.CellStack.length - 1].location;
        row = lastLoc[0] + 1;
        col = lastLoc[1];
        c.location = [row, col];
        this.CellStack.push(c)
    }

    AddSubBlockToMainBlock(subBlock: GenericCell[]) {
        this.CellStack.push(...subBlock)
    }
}