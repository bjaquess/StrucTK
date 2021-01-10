//import { GenericCell } from "../Builder Classes/Cell";

// eslint-disable-next-line no-unused-vars
//import { CellFormatStyle, BuildCellStyle } from "../Builder Functions/BuildCellFormat";

/* export class Layout {
    StaticTextBlock: GenericCell[];
    FormatBlock: GenericCell[];
    FormulaBlock: GenericCell[];

    constructor() {
        this.StaticTextBlock = [];
        this.FormatBlock = [];
        this.FormulaBlock = [];
    }

    BuildStaticTextBlock() {}
    BuildFormatBlock() {}
    BuildFormulaBlock() {}

    CurrentFormatCell(): GenericCell {
        return this.FormatBlock[this.FormatBlock.length - 1];
    }

    AddStaticCell(contents: string | number, location: [number, number]) {
        let c = new GenericCell();
        c.contents = contents;
        c.location = location;
        this.StaticTextBlock.push(c);
    }

    AddStaticCellBelow(contents: string | number) {
        let c = new GenericCell();
        c.contents = contents;
        let newRow = this.StaticTextBlock[this.StaticTextBlock.length - 1].location[0] + 1;
        let newCol = this.StaticTextBlock[this.StaticTextBlock.length - 1].location[1];
        c.location = [newRow, newCol];
        this.StaticTextBlock.push(c);
    }

    AddStaticRange(contents: string[][] | number[][], location: [number, number]) {
        let nRows: number = contents.length;
        let nCols: number = contents[0].length;
        for (let i = 0; i < nRows; i++) {
            for (let j = 0; j < nCols; j++) {
                let c = new GenericCell();
                c.contents = contents[i][j];
                let row = location[0] + i;
                let col = location[1] + j;
                c.location = [row, col];
                this.StaticTextBlock.push(c);
            }
        }
    }

    AddFormatStyle(style: CellFormatStyle, location: [number, number]) {
        let c = new GenericCell();
        c.location = location;
        c.cellFormat = BuildCellStyle(style);
        this.FormatBlock.push(c);
    }

    AddFormatStyleToRange(style: CellFormatStyle, startLocation: [number, number], endLocation: [number, number]) {
        let nRows = endLocation[0] - startLocation[0] + 1;
        let nCols = endLocation[1] - startLocation[1] + 1;
        if (nRows >= 0 && nCols >= 0) {
            for (let i = 0; i < nRows; i++) {
                for (let j = 0; j < nCols; j++) {
                    let c = new GenericCell();
                    let row = startLocation[0] + i;
                    let col = startLocation[1] + j;
                    c.location = [row, col];
                    c.cellFormat = BuildCellStyle(style);
                    this.FormatBlock.push(c);
                }
            }
        }
    }
} */