// eslint-disable-next-line no-unused-vars
import { GenericCell } from "../Builder Classes/Cell";
import { BlockSize } from "../Builder Functions/BlockSize";
import { BlockPasteRange } from "../Builder Functions/BlockPasteRange";

export const ApplyCellContents = async(xlCell: Excel.Range, cellStack: GenericCell[]) => {
    let rangeSize = BlockSize(cellStack);
    let rangeHeight : number = rangeSize[0];
    let rangeWidth : number = rangeSize[1];
    let applyToThisRange = BlockPasteRange(xlCell, cellStack);

    // Initialize empty array of proper size
    let cellArray = Array(rangeHeight + 1).fill(null).map(() => Array(rangeWidth + 1).fill(null));
        
    cellStack.forEach(cell => {
        let row = cell.location[0];
        let col = cell.location[1];
        cellArray[row][col] = cell.contents;
    });
    applyToThisRange.values = cellArray;
}