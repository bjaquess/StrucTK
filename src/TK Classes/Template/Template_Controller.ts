
import { Template_Model } from "./Template_Model";
import { Template_UI } from "./Template_UI";
import { TemplateInputParameters } from "./Template_InputParameters";

export class Template_Controller {
    model: Template_Model;
    UI: Template_UI;
    onNewSheet: boolean;
    trialSheetName: string;

    constructor(onNewSheet: boolean, trialSheetName: string) {
        this.UI = new Template_UI();
        this.model = new Template_Model();
    
        this.onNewSheet = onNewSheet;
        this.trialSheetName = trialSheetName;
    }

    async Execute(range: Excel.Range, row: number, col: number) {
        this.UI.originXlCell = range;
        this.UI.originXlCellRow = row;
        this.UI.originXlCellCol = col;

        this.UI.InputBlock.Build();
        this.UI.OutputBlock.Build();
        this.UI.InputParameters = TemplateInputParameters();
        await this.UI.ApplyCellFormats(this.UI.InputBlock.CellStack());
        await this.UI.ApplyCellFormats(this.UI.OutputBlock.CellStack());
        await this.UI.ApplyCellContents(this.UI.InputBlock.CellStack());
        await this.UI.ApplyCellContents(this.UI.OutputBlock.CellStack());


        //this.UI.ResultsToExcel();
    }

}