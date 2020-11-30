import { GenericCell } from "../Builder Classes/Cell";
import { FormatType, GetFormatType } from "./Format";

export class InputParameter {
    InputCell: GenericCell;
    UnitsCell: GenericCell;

    constructor() {
        this.InputCell = new GenericCell();
        this.InputCell.format = GetFormatType(FormatType.Input);

        this.UnitsCell = new GenericCell();
        this.UnitsCell.format = GetFormatType(FormatType.Units);
    }
}