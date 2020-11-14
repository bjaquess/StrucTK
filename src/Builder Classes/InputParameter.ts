import { GenericCell } from "../Builder Classes/Cell";
import { FormatTypes, GetFormatType } from "./Format";

export class InputParameter {
    InputCell: GenericCell;
    UnitsCell: GenericCell;

    constructor() {
        this.InputCell = new GenericCell();
        this.InputCell.format = GetFormatType(FormatTypes.Input);

        this.UnitsCell = new GenericCell();
        this.UnitsCell.format = GetFormatType(FormatTypes.Units);
    }
}