// eslint-disable-next-line no-unused-vars
import { GenericCell } from "../Builder Classes/Cell";

export const ApplyCellFormats = async(originXlCell: Excel.Range, cellStack: GenericCell[]) => {
    cellStack.forEach(_cell => {
        let row = _cell.location[0];
        let col = _cell.location[1];
        let _applyToThisCell = originXlCell.getOffsetRange(row, col);
        _cell.format.Formatter.ApplyFormatting(_applyToThisCell, _cell.format);
    });
}