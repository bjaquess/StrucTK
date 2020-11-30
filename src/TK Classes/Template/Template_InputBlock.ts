import { FormatType } from "../../Builder Classes/Format";
// eslint-disable-next-line no-unused-vars
import { Template_InputParams } from "./Template_InputParameters";
import { InputBlock } from "../../Builder Classes/InputBlock";

export class Template_InputBlock extends InputBlock {
    
    constructor() {
        super();
    }

    Build(params: Template_InputParams) {
        this.AddCell( FormatType.Title , "Structural ToolKit Template", [0,0]);
        this.AddCell( FormatType.Label, "b =", [2,0]);
        this.AddParameterCell(params.b.InputCell, [2,1]);
        this.AddParameterCell(params.b.UnitsCell, [2,2]);
        this.AddCell( FormatType.Label, "h =", [3,0]);
        this.AddParameterCell(params.d.InputCell, [3,1]);
        this.AddParameterCell(params.d.UnitsCell, [3,2]);
        this.AddCell( FormatType.Label, "A =", [4,0]);
        this.AddCell( FormatType.Explanatory, 'A = b h', [4,3]);
        this.AddCell( FormatType.Label, "Ix =", [5,0]);
        this.AddCell( FormatType.Explanatory, 'Ix = b h^3 / 12', [5,3]);
        this.AddCell( FormatType.Label, "Zx =", [6,0]);
        this.AddCell( FormatType.Explanatory, 'Zx = b h^2 / 4', [6,3]);

        this.AddCell( FormatType.Title, "Format Styles:", [8,0]);
        this.AddCell( FormatType.Label, "Label Cell", [9,1]);
        this.AddCellBelow( FormatType.Input, "Input Cell");
        this.AddCellBelow( FormatType.Explanatory, "Explanatory Cell");
        this.AddCellBelow( FormatType.Equation, "Equation Cell");
        this.AddCellBelow( FormatType.Units, "Units Cell");
        this.AddCellBelow( FormatType.Title, "Title Cell");
        this.AddCellBelow( FormatType.Reference, "Reference Cell");
        this.AddCellBelow( FormatType.SectionDivider, "Section Divider");
        this.AddCellBelow( FormatType.IntermediateResults, "Intermediate Results");
        this.AddCellBelow( FormatType.FinalResults, "Final Results");
        this.AddDropDownCellBelow( FormatType.InputFromList, "Input From List", 'D, L, Lr, E, W');
    }

}