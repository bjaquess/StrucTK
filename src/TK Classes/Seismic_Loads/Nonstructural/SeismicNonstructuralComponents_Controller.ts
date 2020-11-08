/* global Excel */


class InputBlock {

}

class OutputBlock {

}

import { CalcParameter } from "../../../Builder Classes/CalcParameter";
import { Cell } from "../../../Builder Classes/Cell";

export class SeismicNonStructuralComponents_Controller {
    private _formula : string;
    private _cellStack : Cell[];
    private _originXlCell : Excel.Range;
    private _currentXlCell : Excel.Range;
    private _currentXlRange : Excel.Range;
    originXlCellRow : number;
    originXlCellCol : number;

    inputBlock : InputBlock;
    outputBlock : OutputBlock;

    InputParameters : { [index : string] : {CalcParam: CalcParameter}} = {};

    Title : CalcParameter = new CalcParameter();
    Reference : CalcParameter = new CalcParameter();
    ap : CalcParameter = new CalcParameter();
    Rp : CalcParameter = new CalcParameter();
    Sds : CalcParameter = new CalcParameter();
    Ip : CalcParameter = new CalcParameter();
    z : CalcParameter = new CalcParameter();
    h : CalcParameter = new CalcParameter();
    Wp : CalcParameter = new CalcParameter();

    Fp : CalcParameter = new CalcParameter();
    FpMax : CalcParameter = new CalcParameter();
    FpMin : CalcParameter = new CalcParameter();
    FpGov : CalcParameter = new CalcParameter();

    constructor() {
        this._cellStack = [];
        this.BuildInputBlock();
        this.BuildOutputBlock();
        this.BuildParameterCollection(this.InputParameters);
    }

    ResultsToExcel(selectedRange : Excel.Range, row : number, col: number) {
        this.originXlCellRow = row;
        this.originXlCellCol = col;
        this._originXlCell = selectedRange.getCell(0,0);
        this._currentXlRange = this.BlockPasteRange(selectedRange, this._cellStack);
        this.ClearBorders(this._currentXlRange);
        this.ApplyCellFormats(this._originXlCell, this._cellStack);
        this.ApplyCellContents(this._originXlCell, this._cellStack);
        this.BuildFormula(this._originXlCell, this.InputParameters);
    }   

    BuildInputBlock() {
        let r = 0;
        let c : Cell = this.Title.TitleCell;
        c.Contents = "Seismic Demands on Nonstructural Components";
        c.Location = [r,0];
        this.AddCell(c);

        r ++;
        c = this.Reference.ReferenceCell;
        c.Contents = "[Ref. ASCE 7-16: 13.3.1]"
        c.Location = [r,0];
        this.AddCell(c);

        r = r + 2;
        c = this.Sds.LabelCell;
        c.Contents = "Sds =";
        c.Location = [r,0];
        this.AddCell(c);

        c = this.Sds.InputCell;
        c.Location = [r,1];
        this.AddCell(c);

        c = this.Sds.ExplanatoryCell;
        c.Contents = "[Spectral acceleration]";
        c.Location = [r,3];
        this.AddCell(c);

        r ++ ;
        c = this.ap.LabelCell;
        c.Contents = "ap =";
        c.Location = [r,0];
        this.AddCell(c);

        c = this.ap.InputCell;
        c.Location = [r,1];
        this.AddCell(c);

        c = this.ap.ExplanatoryCell;
        c.Contents = "[Component amplification factor]";
        c.Location = [r,3];
        this.AddCell(c);

        r ++;
        c = this.Rp.LabelCell;
        c.Contents = "Rp =";
        c.Location = [r,0];
        this.AddCell(c);

        c = this.Rp.InputCell;
        c.Location = [r,1];
        this.AddCell(c);

        c = this.Rp.ExplanatoryCell;
        c.Contents = "[Component amplification factor]";
        c.Location = [r,3];
        this.AddCell(c);

        r ++;
        c = this.Ip.LabelCell;
        c.Contents = "Ip =";
        c.Location = [r,0];
        this.AddCell(c);

        c = this.Ip.InputCell;
        c.Location = [r,1];
        this.AddCell(c);

        c = this.Ip.ExplanatoryCell;
        c.Contents = "[Importance factor]";
        c.Location = [r,3];
        this.AddCell(c);

        r ++;
        c = this.z.LabelCell;
        c.Contents = "z =";
        c.Location = [r,0];
        this.AddCell(c);

        c = this.z.InputCell;
        c.Location = [r,1];
        this.AddCell(c);

        c = this.z.UnitsCell;
        c.Location = [r,2];
        c.Contents = 'ft';
        this.AddCell(c);

        c = this.z.ExplanatoryCell;
        c.Contents = "[Height in structure of point of attachment]";
        c.Location = [r,3];
        this.AddCell(c);

        r ++;
        c = this.h.LabelCell;
        c.Contents = "h =";
        c.Location = [r,0];
        this.AddCell(c);

        c = this.h.InputCell;
        c.Location = [r,1];
        this.AddCell(c);

        c = this.h.UnitsCell;
        c.Location = [r,2];
        c.Contents = 'ft';
        this.AddCell(c);

        c = this.h.ExplanatoryCell;
        c.Contents = '[Average roof height of structure]';
        c.Location = [r,3];
        this.AddCell(c);

        r ++;
        c = this.Wp.LabelCell;
        c.Contents = "Wp =";
        c.Location = [r,0];
        this.AddCell(c);

        c = this.Wp.InputCell;
        c.Location = [r,1];
        this.AddCell(c);

        c = this.Wp.UnitsCell;
        c.Location = [r,2];
        c.Contents = 'lbs';
        this.AddCell(c);

        c = this.Wp.ExplanatoryCell;
        c.Contents = "[Component operating weight]";
        c.Location = [r,3];
        this.AddCell(c);
    }

    BuildOutputBlock() {
        let relativeInputBlockOrigin = [-10 , 0]; 
        let r : number = 0 - relativeInputBlockOrigin[0];
        let c : Cell = this.Fp.LabelCell;
        c.Location = [r,0];
        this.AddCell(c);

        c = this.Fp.IntermediateResultsCell;
        c.Location = [r,1];
        this.AddCell(c);

        c = this.Fp.UnitsCell;
        c.Location = [r,2];
        this.AddCell(c);

        c = this.Fp.EquationCell;
        c.Location = [r,3];
        this.AddCell(c);

        r ++;
        c = this.FpMax.LabelCell;
        c.Location = [r,0];
        this.AddCell(c);

        c = this.FpMax.IntermediateResultsCell;
        c.Location = [r,1];
        this.AddCell(c);

        c = this.FpMax.UnitsCell;
        c.Location = [r,2];
        this.AddCell(c);

        c = this.FpMax.EquationCell;
        c.Location = [r,3];
        this.AddCell(c);

        r ++;
        c = this.FpMin.LabelCell;
        c.Location = [r,0];
        this.AddCell(c);

        c = this.FpMin.IntermediateResultsCell;
        c.Location = [r,1];
        this.AddCell(c);

        c = this.FpMin.UnitsCell;
        c.Location = [r,2];
        this.AddCell(c);

        c = this.FpMin.EquationCell;
        c.Location = [r,3];
        this.AddCell(c);

        r ++;
        c = this.FpGov.LabelCell;
        c.Location = [r,0];
        this.AddCell(c);
        
        c = this.FpGov.FinalResultsCell;
        c.Location = [r,1];
        this.AddCell(c);

        c = this.FpGov.UnitsCell;
        c.Location = [r,2];
        this.AddCell(c);
    }

    BuildParameterCollection(params : {[index: string] : {CalcParam : CalcParameter}}) {
        params['ap'] = {CalcParam: this.ap}
        params['Rp'] = {CalcParam: this.Rp}
        params['Sds'] = {CalcParam: this.Sds}
        params['Ip'] = {CalcParam: this.Ip}
        params['z'] = {CalcParam: this.z}
        params['h'] = {CalcParam: this.h}
        params['Wp'] = {CalcParam: this.Wp}
    }

    ApplyCellFormats(originCell : Excel.Range, cellStack : Cell[]) {
        cellStack.forEach(_cell => {
            let row = _cell.Location[0];
            let col = _cell.Location[1];
            this._currentXlCell = originCell.getOffsetRange(row,col);
            _cell.Format.Formatter.ApplyFormatting(this._currentXlCell, _cell.Format);
        });
    }

    ApplyCellContents(originCell : Excel.Range, cellStack : Cell[]) {
        let rangeSize = this.BlockSize(cellStack);
        let rangeHeight : number = rangeSize[0];
        let rangeWidth : number = rangeSize[1];

        this._currentXlRange = this.BlockPasteRange(originCell, cellStack);
        
        // Initialize empty array of proper size
        let cellArray = Array(rangeHeight + 1).fill(null).map(() => Array(rangeWidth + 1).fill(null));
        
        cellStack.forEach(cell => {
            let row = cell.Location[0];
            let col = cell.Location[1];
            cellArray[row][col] = cell.Contents;
        });
        this._currentXlRange.values = cellArray;
    }

        AddCell(c : Cell) {
        this._cellStack.push(c);
    }
    


    BuildFormula(originCell : Excel.Range, params : {[index: string] : {CalcParam : CalcParameter}}) {
        let oRow = this.originXlCellRow;
        let oCol = this.originXlCellCol;
        let origin : [number, number] = [oRow, oCol];
        let tempLoc : [number, number];
        //let tempParam : CalcParameter = new CalcParameter();

        let sdsAddress : string;   
        let apAddress: string;
        let rpAddress: string;
        let ipAddress: string;
        let zAddress: string;
        let hAddress: string;
        let wpAddress: string; 
        
        
        tempLoc = params['Sds'].CalcParam.InputCell.Location;
        sdsAddress  = CellAddress(origin, tempLoc);

        tempLoc = params['ap'].CalcParam.InputCell.Location;
        apAddress  = CellAddress(origin, tempLoc);

        tempLoc = params['Rp'].CalcParam.InputCell.Location;
        rpAddress  = CellAddress(origin, tempLoc);

        tempLoc = params['Ip'].CalcParam.InputCell.Location;
        ipAddress  = CellAddress(origin, tempLoc);

        tempLoc = params['z'].CalcParam.InputCell.Location;
        zAddress  = CellAddress(origin, tempLoc);

        tempLoc = params['h'].CalcParam.InputCell.Location;
        hAddress  = CellAddress(origin, tempLoc);

        tempLoc = params['Wp'].CalcParam.InputCell.Location;
        wpAddress  = CellAddress(origin, tempLoc);

        this._formula = `=tk.seismicnonstructural(${sdsAddress}, ${apAddress}, ${rpAddress}, ${ipAddress}, ${zAddress}, ${hAddress}, ${wpAddress})`;

        this._originXlCell = originCell.getOffsetRange(10,0);
        this._originXlCell.formulas = [[ this._formula ]];

    }
    
    BlockSize(cellStack : Cell[]) : [number, number] {
        let height = 0;
        let width = 0;

        cellStack.forEach(cell => {
            if (cell.Location[0] > height) {height = cell.Location[0]}
            if (cell.Location[1] > width) {width = cell.Location[1]}
        });
        return [height, width];
    }

    BlockPasteRange(range : Excel.Range, cellStack : Cell[]) : Excel.Range {
        let rangeSize = this.BlockSize(cellStack);
        let height : number = rangeSize[0];
        let width : number = rangeSize[1];

        return range.getResizedRange(height,width);
    }

    ClearBorders(range : Excel.Range) {
        range.clear;
        range.format.borders.getItem('EdgeTop').style = 'None';
        range.format.borders.getItem('EdgeBottom').style = 'None';
        range.format.borders.getItem('EdgeLeft').style = 'None';
        range.format.borders.getItem('EdgeRight').style = 'None';
        range.format.borders.getItem('InsideHorizontal').style = 'None';
        range.format.borders.getItem('InsideVertical').style = 'None';
    }
}

function CellAddress(origin : [number, number], relativeLoc : [number, number]) : string {
    let cellAddress : string;
    let originRow : number = origin[0];
    let originCol : number = origin[1];
    let absRow : number;
    let absCol : number;
    let absColStr : string;
    let colDigit1 : string;
    let colDigit2 : string;
    let colDigit3 : string;

    absRow = originRow + relativeLoc[0] + 1;
    absCol = originCol + relativeLoc[1];

    absRow = Math.min(absRow, 1048576); // Max allowable number of rows in Excel
    absCol = Math.min(absCol, 16384); // Max allowable number of columns in Excel
    
    colDigit1 = String.fromCharCode(65 + (absCol) % 26);

    if (absCol < 26) { 
        absColStr = colDigit1 }
    else if (absCol < 702) { 
        colDigit2 = String.fromCharCode(65 + (Math.trunc((absCol - 26) / 26) % 26));
        absColStr = `${colDigit2}${colDigit1}` }
    else if (absCol >= 702) { 
        colDigit2 = String.fromCharCode(65 + (Math.trunc((absCol - 26) / 26) % 26));
        colDigit3 = String.fromCharCode(65 + (Math.trunc((absCol - 26 ** 2) / 26 ** 2) % 26));
        absColStr = `${colDigit3}${colDigit2}${colDigit1}` }
    
    cellAddress = `${absColStr}${absRow.toString()}`;
    return cellAddress;
}

