import { Controller } from "../../Builder Classes/Controller";
import { ConcFlexure_InputBlock } from "./ConcFlexure_InputBlock";
import { ConcFlexure_OutputBlock } from "./ConcFlexure_OutputBlock";
import { ConcFlexure_InputParams } from "./ConcFlexure_InputParameters";
import { ConcFlexure_Figures } from "./ConcFlexure_Figures";

import { ParameterCellAddress, ParameterRangeAddress } from "../../Builder Functions/ParameterCellAddress";
import { ApplyCellFormats } from "../../Builder Functions/ApplyCellFormats";
import { ApplyCellContents } from "../../Builder Functions/ApplyCellContents";

export class ConcFlexure_Controller extends Controller {
    InputBlock: ConcFlexure_InputBlock;
    OutputBlock: ConcFlexure_OutputBlock;
    InputParams: ConcFlexure_InputParams;
    Figures: ConcFlexure_Figures;

    constructor() {
        super();
        this.InputBlock = new ConcFlexure_InputBlock();
        this.OutputBlock = new ConcFlexure_OutputBlock();
        this.InputParams = new ConcFlexure_InputParams();
        this.Figures = new ConcFlexure_Figures();
    }

    async Execute(range: Excel.Range, row: number, col: number, shapes: Excel.ShapeCollection) {
        this.InputBlock.Build(this.InputParams);
        this.OutputBlock.Build();

        this.Figures.Assemble();
        this.Figures.Apply(shapes);
        
        await ApplyCellFormats(range, this.InputBlock.CellStack());
        await ApplyCellFormats(range, this.OutputBlock.FormatStack());
        
        await ApplyCellContents(range, this.InputBlock.CellStack());
        await this.ApplyFormula(range, row, col, this.OutputBlock.FormulaLocation());
        let LCRow = this.InputParams.loadCasesEnd.InputCell.location[0] + 1;
        let LCCol = 0;
        await this.ApplyLoadComboFormula(range, row, col, [LCRow, LCCol]);
    }

    async ApplyFormula(range: Excel.Range, row: number, col: number, location: [number, number]) {
        let formula: string;
        let origin: [number, number] = [row, col];
        let address: string[] = [];
        
        address[0] = ParameterCellAddress(origin, this.InputParams.b.InputCell);
        address[1] = ParameterCellAddress(origin, this.InputParams.d.InputCell);
        address[2] = ParameterCellAddress(origin, this.InputParams.fy.InputCell);
        address[3] = ParameterCellAddress(origin, this.InputParams.fc.InputCell);
        address[4] = ParameterCellAddress(origin, this.InputParams.nBars.InputCell);
        address[5] = ParameterCellAddress(origin, this.InputParams.barSize.InputCell);

        formula = `=tk.ConcRectFlexure(${address[0]}, ${address[1]}, ${address[2]}, ${address[3]}, ${address[4]}, ${address[5]})`;

        range.getOffsetRange(location[0], location[1]).formulas = [[ formula]];
    }

    async ApplyLoadComboFormula(range: Excel.Range, row: number, col: number, location: [number, number]) {
        let formula: string;
        let origin: [number, number] = [row, col];
        let address: string[] = [];

        address[0] = ParameterRangeAddress(origin, this.InputParams.loadCasesStart.InputCell, this.InputParams.loadCasesEnd.InputCell);
        address[1] = ParameterRangeAddress(origin, this.InputParams.loadsStart.InputCell, this.InputParams.loadsEnd.InputCell);
        
        formula = `=tk.LoadCombinations(${address[0]},${address[1]}, 1, 0, 0)`;

        range.getOffsetRange(location[0], location[1]).formulas = [[ formula ]];
    }
}