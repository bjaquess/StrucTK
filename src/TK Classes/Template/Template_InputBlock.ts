import { GenericCell } from "../../Builder Classes/Cell";
import { FormatTypes, GetFormatType } from "../../Builder Classes/Format";

export class Template_InputBlock {
    private cellStack: GenericCell[];

    constructor() {
        this.cellStack = []
    }

    Build() {
        this.AddCell( FormatTypes.Title , "Structural ToolKit Template", [0,0]);
        this.AddCell( FormatTypes.Label, "b =", [2,0]);
        this.AddCell( FormatTypes.Input, 2, [2,1]);
        this.AddCell( FormatTypes.Units, "in", [2,2]);
        this.AddCell( FormatTypes.Label, "h =", [3,0]);
        this.AddCell( FormatTypes.Input, 3, [3,1]);
        this.AddCell( FormatTypes.Units, "in", [3,2]);
    }

    AddCell(cellType: FormatTypes, contents: string | number, location: [number, number]) {
        let c = new GenericCell();
        c.format = GetFormatType(cellType);
        c.contents = contents;
        c.location = location;
        this.cellStack.push(c)
    }

    CellStack(): GenericCell[] {
        return this.cellStack
    }
}