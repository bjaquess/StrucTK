import { FormatTypes } from "../../Builder Classes/Format";
// eslint-disable-next-line no-unused-vars
import { Template_InputParams } from "./Template_InputParameters";
import { InputBlock } from "../../Builder Classes/InputBlock";

export class Template_InputBlock extends InputBlock {
    
    constructor() {
        super();
    }

    Build(params: Template_InputParams) {
        this.AddCell( FormatTypes.Title , "Structural ToolKit Template", [0,0]);
        this.AddCell( FormatTypes.Label, "b =", [2,0]);
        this.AddParameterCell(params.b.InputCell, [2,1]);
        this.AddParameterCell(params.b.UnitsCell, [2,2]);
        this.AddCell( FormatTypes.Label, "h =", [3,0]);
        this.AddParameterCell(params.d.InputCell, [3,1]);
        this.AddParameterCell(params.d.UnitsCell, [3,2]);
        this.AddCell( FormatTypes.Label, "A =", [4,0]);
        this.AddCell( FormatTypes.Explanatory, 'A = b h', [4,3]);
        this.AddCell( FormatTypes.Label, "Ix =", [5,0]);
        this.AddCell( FormatTypes.Explanatory, 'Ix = b h^3 / 12', [5,3]);
        this.AddCell( FormatTypes.Label, "Zx =", [6,0]);
        this.AddCell( FormatTypes.Explanatory, 'Zx = b h^2 / 4', [6,3]);

        this.AddCell( FormatTypes.Title, "Format Styles:", [8,0]);
        this.AddCell( FormatTypes.Label, "Label Cell", [9,1]);
        this.AddCellBelow( FormatTypes.Input, "Input Cell");
        this.AddCellBelow( FormatTypes.Explanatory, "Explanatory Cell");
        this.AddCellBelow( FormatTypes.Equation, "Equation Cell");
        this.AddCellBelow( FormatTypes.Units, "Units Cell");
        this.AddCellBelow( FormatTypes.Title, "Title Cell");
        this.AddCellBelow( FormatTypes.Reference, "Reference Cell");
        this.AddCellBelow( FormatTypes.SectionDivider, "Section Divider");
        this.AddCellBelow( FormatTypes.IntermediateResults, "Intermediate Results");
        this.AddCellBelow( FormatTypes.FinalResults, "Final Results");


    }

}