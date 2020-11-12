
// eslint-disable-next-line no-unused-vars
import { GenericCell } from "../Builder Classes/Cell";
import { BlockSize } from "../Builder Functions/BlockSize";

export function BlockPasteRange(range : Excel.Range, cellStack : GenericCell[]) : Excel.Range {
    let rangeSize = BlockSize(cellStack);
    let height : number = rangeSize[0];
    let width : number = rangeSize[1];

    return range.getResizedRange(height,width);
}