/* global console */

import { AddNewSheet } from "../../Builder Functions/AddNewSheet";
import { NewSheet } from "../../Builder Classes/NewSheet";
import { SheetNameOfActiveWS } from "../../Builder Functions/SheetNameOfActiveWS";
// eslint-disable-next-line no-unused-vars
import { InputParameter } from "../../Builder Classes/InputParameter";
import { Template_InputBlock } from "./Template_InputBlock";
import { Template_OutputBlock } from "./Template_OutputBlock";
import { Template_InputParams } from "./Template_InputParameters";
// eslint-disable-next-line no-unused-vars
import { GenericCell } from "../../Builder Classes/Cell";
import { BlockPasteRange } from "../../Builder Functions/BlockPasteRange";
import { BlockSize } from "../../Builder Functions/BlockSize";
import { CellAddress } from "../../Builder Functions/CellAddress";

export class Template_UI {
    private newSheet: NewSheet;
    currentSheetName: string;
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

    ResultsToExcel() {
        //PasteSingleValueToCell(12, this.currentSheetName, 2, 2)
    }

    async TargetLocationOnNewSheet(sheetName: string) {
        this.newSheet = new NewSheet;
        this.newSheet.trialSheetName = sheetName;
        let name = await AddNewSheet(this.newSheet)
        .then(() => SheetNameOfActiveWS())
        .catch(() => console.error('Error in adding new worksheet'));
        this.SetTargetSheetName(name)
    }

    async TargetLocationSelectedCell() {
        let name = await SheetNameOfActiveWS()
            .catch(() => console.error('Error in obtaining active worksheet name!'));
        this.SetTargetSheetName(name)
    }

    SetTargetSheetName(name: string | void) {
        if (typeof name === 'string') {this.currentSheetName = name}
        else {console.error('Error in assigning target sheet name')}
    }

    async ApplyCellFormats(cellStack: GenericCell[]) {
        cellStack.forEach(_cell => {
            let row = _cell.location[0];
            let col = _cell.location[1];
            let _currentXlCell = this.originXlCell.getOffsetRange(row, col);
            _cell.format.Formatter.ApplyFormatting(_currentXlCell, _cell.format);
        });
    }

    async ApplyCellContents(cellStack : GenericCell[]) {
        let rangeSize = BlockSize(cellStack);
        let rangeHeight : number = rangeSize[0];
        let rangeWidth : number = rangeSize[1];

        this.currentXlRange = BlockPasteRange(this.originXlCell, cellStack);
        // Initialize empty array of proper size
        let cellArray = Array(rangeHeight + 1).fill(null).map(() => Array(rangeWidth + 1).fill(null));
        
        cellStack.forEach(cell => {
            let row = cell.location[0];
            let col = cell.location[1];
            cellArray[row][col] = cell.contents;
        });
        this.currentXlRange.values = cellArray;
    }

    async ApplyFormula(location: [number, number]) {
        let formula: string;
        let origin: [number, number] = [this.originXlCellRow, this.originXlCellCol];
        let address: string[] = [];
        
        address[0] = CellAddress(origin, this.InputParams.b.InputCell.location);
        address[1] = CellAddress(origin, this.InputParams.d.InputCell.location);

        formula = `=tk.template(${address[0]}, ${address[1]})`;

        this.originXlCell.getOffsetRange(location[0], location[1]).formulas = [[ formula]];
    }
}
