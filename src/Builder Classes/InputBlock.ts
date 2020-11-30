import { GenericCell } from "../Builder Classes/Cell";
// eslint-disable-next-line no-unused-vars
import { FormatType, GetFormatType } from "../Builder Classes/Format";

export class InputBlock {
    private cellStack: GenericCell[];
    private inputParameters: GenericCell[];

    constructor() {
        this.cellStack = [];
    }
    
    AddCell(cellType: FormatType, contents: string | number, location: [number, number]) {
        let c = new GenericCell();
        c.format = GetFormatType(cellType);
        c.contents = contents;
        c.location = location;
        this.cellStack.push(c)
    }

    AddCellBelow(cellType: FormatType, contents: string | number) {
        let c = new GenericCell();
        c.format = GetFormatType(cellType);
        c.contents = contents;
        let newRow = this.cellStack[this.cellStack.length - 1].location[0] + 1;
        let newCol = this.cellStack[this.cellStack.length - 1].location[1];
        c.location = [newRow, newCol];
        this.cellStack.push(c);
    }

    AddDropDownCell(cellType: FormatType, contents: string | number, location: [number, number], dropDownList: string | Excel.Range) {
        let c = new GenericCell();
        c.format = GetFormatType(cellType);
        c.contents = contents;
        c.location = location;
        c.format.DropDownListItems = dropDownList;
        this.cellStack.push(c)
    }

    AddDropDownCellBelow(cellType: FormatType, contents: string | number, dropDownList: string | Excel.Range) {
        let c = new GenericCell();
        c.format = GetFormatType(cellType);
        c.contents = contents;
        let newRow = this.cellStack[this.cellStack.length - 1].location[0] + 1;
        let newCol = this.cellStack[this.cellStack.length - 1].location[1];
        c.location = [newRow, newCol];
        c.format.DropDownListItems = dropDownList;
        this.cellStack.push(c);
    }

    AddParameterCell(cell: GenericCell, location: [number, number]) {
        cell.location = location;
        this.cellStack.push(cell);
    }

    AddParameterCellBelow(cell: GenericCell) {
        let newRow = this.cellStack[this.cellStack.length - 1].location[0] + 1;
        let newCol = this.cellStack[this.cellStack.length - 1].location[1];
        cell.location = [newRow, newCol];
        this.cellStack.push(cell);
    }

    CellStack(): GenericCell[] {
        return this.cellStack
    }

    InputParameters(): GenericCell[] {
        return this.inputParameters
    }
}