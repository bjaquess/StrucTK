/* global  */

import { Template_InputBlock } from "./Template_InputBlock";
import { Template_OutputBlock } from "./Template_OutputBlock";
import { Template_InputParams } from "./Template_InputParameters";

import { ParameterCellAddress } from "../../Builder Functions/ParameterCellAddress";
import { ApplyCellFormats } from "../../Builder Functions/ApplyCellFormats";
import { ApplyCellContents } from "../../Builder Functions/ApplyCellContents";

export class Template_UI {
    originXlCell: Excel.Range;
    originXlCellRow: number;
    originXlCellCol: number;
    currentXlRange: Excel.Range;

    InputBlock: Template_InputBlock;
    OutputBlock: Template_OutputBlock;
    InputParams: Template_InputParams;
    
    constructor() {
        this.InputParams = new Template_InputParams();
        this.InputBlock = new Template_InputBlock();
        this.OutputBlock = new Template_OutputBlock();
    }

    async Execute(range: Excel.Range, row: number, col: number) {
        this.originXlCell = range;
        this.originXlCellRow = row;
        this.originXlCellCol = col;
        this.InputBlock.Build(this.InputParams);
        this.OutputBlock.Build();

        await ApplyCellFormats(this.originXlCell, this.InputBlock.CellStack());
        await ApplyCellFormats(this.originXlCell, this.OutputBlock.FormatStack(-4, -1));
        
        await ApplyCellContents(this.originXlCell, this.InputBlock.CellStack());
        await this.ApplyFormula(this.OutputBlock.FormulaLocation());
        
    }

    async ApplyFormula(location: [number, number]) {
        let formula: string;
        let origin: [number, number] = [this.originXlCellRow, this.originXlCellCol];
        let address: string[] = [];
        
        address[0] = ParameterCellAddress(origin, this.InputParams.b.InputCell);
        address[1] = ParameterCellAddress(origin, this.InputParams.d.InputCell);

        formula = `=tk.template(${address[0]}, ${address[1]})`;

        this.originXlCell.getOffsetRange(location[0], location[1]).formulas = [[ formula]];
    }

    //async TargetLocationOnNewSheet(sheetName: string) {
        //this.newSheet = new NewSheet;
        //this.newSheet.trialSheetName = sheetName;
        //let name = await AddNewSheet(this.newSheet)
        //await AddNewSheet(sheetName)
        //.catch(() => console.error('Error in adding new worksheet'));
        //.then(() => SheetNameOfActiveWS())
        //.catch(() => console.error('Error in adding new worksheet'));
        //this.SetTargetSheetName(name)
    //}

    //async TargetLocationSelectedCell() {
        //let name = await SheetNameOfActiveWS()
        //    .catch(() => console.error('Error in obtaining active worksheet name!'));
        //this.SetTargetSheetName(name)
    //}

    //SetTargetSheetName(name: string | void) {
    //    if (typeof name === 'string') {this.currentSheetName = name}
    //    else {console.error('Error in assigning target sheet name')}
    //}

}
