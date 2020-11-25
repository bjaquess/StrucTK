
import { UI } from "../../Builder Classes/UI";
import { Template_InputBlock } from "./Template_InputBlock";
import { Template_OutputBlock } from "./Template_OutputBlock";
import { Template_InputParams } from "./Template_InputParameters";
import { Template_Figures } from "./Template_Figures";

import { ParameterCellAddress } from "../../Builder Functions/ParameterCellAddress";
import { ApplyCellFormats } from "../../Builder Functions/ApplyCellFormats";
import { ApplyCellContents } from "../../Builder Functions/ApplyCellContents";


export class Template_UI extends UI {

    InputBlock: Template_InputBlock;
    OutputBlock: Template_OutputBlock;
    InputParams: Template_InputParams;
    Figures: Template_Figures;
    
    constructor() {
        super();
        this.InputParams = new Template_InputParams();
        this.InputBlock = new Template_InputBlock();
        this.OutputBlock = new Template_OutputBlock();
        this.Figures = new Template_Figures();
        this.onNewSheet = true;
        this.trialSheetName = "NewTemplate";
    }

    async Execute(range: Excel.Range, row: number, col: number, shapes: Excel.ShapeCollection, charts: Excel.ChartCollection) {
        this.charts = charts;

        this.InputBlock.Build(this.InputParams);
        this.OutputBlock.Build();

        this.Figures.Assemble();
        this.Figures.Apply(shapes);
        
        await ApplyCellFormats(range, this.InputBlock.CellStack());
        await ApplyCellFormats(range, this.OutputBlock.FormatStack());
        
        await ApplyCellContents(range, this.InputBlock.CellStack());
        await this.ApplyFormula(range, row, col, this.OutputBlock.FormulaLocation());

        

    }

    async ApplyFormula(range: Excel.Range, row: number, col: number, location: [number, number]) {
        let formula: string;
        let origin: [number, number] = [row, col];
        let address: string[] = [];
        
        address[0] = ParameterCellAddress(origin, this.InputParams.b.InputCell);
        address[1] = ParameterCellAddress(origin, this.InputParams.d.InputCell);

        formula = `=tk.template(${address[0]}, ${address[1]})`;

        range.getOffsetRange(location[0], location[1]).formulas = [[ formula]];
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
