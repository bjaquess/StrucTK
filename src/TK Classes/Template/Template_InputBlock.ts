import { GenericCell } from "../../Builder Classes/Cell";
import { FormatTypes, GetFormatType } from "../../Builder Classes/Format";
// eslint-disable-next-line no-unused-vars
import { Template_InputParams } from "./Template_InputParameters";

export class Template_InputBlock {
    private cellStack: GenericCell[];
    private inputParameters: GenericCell[];

    constructor() {
        this.cellStack = [];
        //this.inputParameters = [];
    }

    Build(params: Template_InputParams) {
        this.AddCell( FormatTypes.Title , "Structural ToolKit Template", [0,0]);
        this.AddCell( FormatTypes.Label, "b =", [2,0]);
        this.AddParameterCell(params.b.InputCell, [2,1]);
        this.AddParameterCell(params.b.UnitsCell, [2,2]);
        //this.AddCell( FormatTypes.Units, "in", [2,2]);
        this.AddCell( FormatTypes.Label, "h =", [3,0]);
        this.AddParameterCell(params.d.InputCell, [3,1]);
        this.AddParameterCell(params.d.UnitsCell, [3,2]);
        //this.AddParameterCell(10, [3,1]);
        //this.AddCell( FormatTypes.Units, "in", [3,2]);
    }

    private AddCell(cellType: FormatTypes, contents: string | number, location: [number, number]) {
        let c = new GenericCell();
        c.format = GetFormatType(cellType);
        c.contents = contents;
        c.location = location;
        this.cellStack.push(c)
    }

    private AddParameterCell(cell: GenericCell, location: [number, number]) {
        //let c = new GenericCell();
        //c.format = GetFormatType(FormatTypes.Input);
        //c.contents = initialVal;
        cell.location = location;
        this.cellStack.push(cell);
        //this.inputParameters.push(c);
    }

    CellStack(): GenericCell[] {
        return this.cellStack
    }

    InputParameters(): GenericCell[] {
        return this.inputParameters
    }
}