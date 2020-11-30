import { FormatType } from "../../Builder Classes/Format";
import { InputBlock } from "../../Builder Classes/InputBlock";
// eslint-disable-next-line no-unused-vars
import { ConcFlexure_InputParams } from "./ConcFlexure_InputParameters";

export class ConcFlexure_InputBlock extends InputBlock {
    constructor() {
        super();
    }

    Build(params: ConcFlexure_InputParams) {
        this.AddCell (FormatType.Title, 'Concrete Rectangular Beam Flexure', [0,0]);
        // for(let i = 0; i < 10; i++) {
        //     this.AddCell (FormatTypes.SectionDivider, '', [0, i + 1]);
        // }
        this.AddCell( FormatType.Label, 'b =', [2, 0]);
        this.AddCellBelow( FormatType.Label, 'd =');
        this.AddCellBelow( FormatType.Label, 'fy =');
        this.AddCellBelow( FormatType.Label, 'f\'c =');
        this.AddCellBelow( FormatType.Label, '# of Bars =');
        this.AddCellBelow( FormatType.Label, 'Bar Size =');
        this.AddCellBelow( FormatType.Label, 'As =');
        this.AddCellBelow( FormatType.Label, 'phiMn =');
        this.AddCellBelow( FormatType.Label, 'rhoMin =');

        this.AddParameterCell(params.b.InputCell, [2,1]);
        this.AddParameterCellBelow(params.d.InputCell);
        this.AddParameterCellBelow(params.fy.InputCell);
        this.AddParameterCellBelow(params.fc.InputCell);
        this.AddParameterCellBelow(params.nBars.InputCell);
        this.AddParameterCellBelow(params.barSize.InputCell);

        this.AddParameterCell(params.b.UnitsCell, [2,2]);
        this.AddParameterCellBelow(params.d.UnitsCell);
        this.AddParameterCellBelow(params.fy.UnitsCell);
        this.AddParameterCellBelow(params.fc.UnitsCell);
        this.AddParameterCellBelow(params.nBars.UnitsCell);
        this.AddParameterCellBelow(params.barSize.UnitsCell);

        // **** LoadCase Block ****
        this.AddCell( FormatType.BorderBott, 'Load Case', [12, 1]);
        this.AddCell( FormatType.BorderLeftBott, 'M (in-k)', [12,2]);
        let numLoadCases: number = 5;
        let loadCases: string = 'D, L, Lr, Eh, Ev, Emh, W, W+, W-, S, H';
        let loadCasesArray: string[] = ['D', 'L', 'Lr', 'Eh', 'W+', 'W-', 'W', 'Emh', 'S', 'H'];

        params.loadCasesStart.InputCell.contents = loadCasesArray[0];
        this.AddParameterCell(params.loadCasesStart.InputCell, [13, 1]);
        this.AddParameterCell(params.loadsStart.InputCell, [13,2]);
        for(let i = 1; i < numLoadCases; i++) {
            this.AddDropDownCell( FormatType.InputFromList, loadCasesArray[i], [13 + i, 1] , loadCases) 
            this.AddCell( FormatType.Input, '', [13 + i, 2]);
        }
        params.loadCasesEnd.InputCell.location = [13 + numLoadCases - 1, 1];
        params.loadsEnd.InputCell.location = [13 + numLoadCases - 1, 2];
    }
}