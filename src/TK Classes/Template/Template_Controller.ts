
//import { Template_Model } from "./Template_Model"; 
//import { Template_UI } from "./Template_UI";
//import { TemplateInputParameters } from "./Template_InputParameters";

/* export class Template_Controller {
    // <-- Denotes line to customize for each new Design Block
    //model: Template_Model; // <--
    UI: Template_UI; // <--
    
    constructor() {
        this.UI = new Template_UI(); // <--
        //this.model = new Template_Model(); // <--
    }

    async Execute(range: Excel.Range, row: number, col: number) {
        this.UI.originXlCell = range;
        this.UI.originXlCellRow = row;
        this.UI.originXlCellCol = col;

        //this.UI.InputBlock.InputParameters;
        this.UI.InputBlock.Build(this.UI.InputParams);
        this.UI.OutputBlock.Build();
        //this.UI.InputParameters = TemplateInputParameters();
        //await this.UI.ApplyCellFormats(this.UI.InputBlock.CellStack());
        //await this.UI.ApplyCellContents(this.UI.InputBlock.CellStack());
        //await this.UI.ApplyCellFormats(this.UI.OutputBlock.CellStack());
        
        await this.UI.ApplyFormula(range, row, col, this.UI.OutputBlock.FormulaLocation());
        
        //this.UI.ResultsToExcel();
    }

} */