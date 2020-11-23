import { GenericCell } from "../../Builder Classes/Cell";
import { FormatTypes, GetFormatType } from "../../Builder Classes/Format";
import { Template_Model } from "../Template/Template_Model";

export class Template_OutputBlock {
    private model: Template_Model;
    
    private cellStack: GenericCell[];
    private relativeInputBlockOrigin: [number, number];
    private row: number = 0;
    private col: number = 0;

    constructor() {
        this.model = new Template_Model();
        this.cellStack = []
    }

    Build() {
        // **** This is custom for each Block ****
        this.relativeInputBlockOrigin = [-4,-1];
        // ***************************************

        this.AddCellCurrentLocation(FormatTypes.IntermediateResults);
        this.AddCellRightOfLast(FormatTypes.Units);

        this.AddCellRelativeToLast(FormatTypes.IntermediateResults, [1, -1]);
        this.AddCellRightOfLast(FormatTypes.Units);

        this.AddCellRelativeToLast(FormatTypes.IntermediateResults, [1, -1]);
        this.AddCellRightOfLast(FormatTypes.Units);
    }

    ResultsArray() {

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
    
    AddCellRightOfLast(cellType: FormatTypes) {
        this.AddCellRelativeToLast(cellType, [0,1]);
    }

    AddCellCurrentLocation(cellType: FormatTypes) {
        let c = new GenericCell();
        c.format = GetFormatType(cellType);
        c.location = [this.row, this.col];
        this.cellStack.push(c)
    }

    AddCellRelativeToLast(cellType: FormatTypes, relativeLocation: [number, number]) {
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