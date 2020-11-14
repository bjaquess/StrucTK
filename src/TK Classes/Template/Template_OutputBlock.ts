import { GenericCell } from "../../Builder Classes/Cell";
import { FormatTypes, GetFormatType } from "../../Builder Classes/Format";

export class Template_OutputBlock {
    private cellStack: GenericCell[];
    private relativeInputBlockOrigin: [number, number];
    private row: number;
    private col: number;

    constructor() {
        this.cellStack = []
    }

    Build() {
        this.relativeInputBlockOrigin = [-4,0];
        this.row = 0 - this.relativeInputBlockOrigin[0];
        this.col = 0 - this.relativeInputBlockOrigin[1];

        this.AddCellCurrentLocation(FormatTypes.Label);
        this.AddCellRightOfLast(FormatTypes.IntermediateResults);
        this.AddCellRightOfLast(FormatTypes.Units);
        this.AddCellRightOfLast(FormatTypes.Explanatory);

        this.AddCellRelativeToLast(FormatTypes.Label, [1,-3]);
        this.AddCellRightOfLast(FormatTypes.IntermediateResults);
        this.AddCellRightOfLast(FormatTypes.Units);
        this.AddCellRightOfLast(FormatTypes.Explanatory);

        this.AddCellRelativeToLast(FormatTypes.Label, [1,-3]);
        this.AddCellRightOfLast(FormatTypes.IntermediateResults);
        this.AddCellRightOfLast(FormatTypes.Units);
        this.AddCellRightOfLast(FormatTypes.Explanatory);
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