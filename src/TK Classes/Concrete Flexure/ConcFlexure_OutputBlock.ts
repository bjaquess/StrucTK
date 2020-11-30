import { FormatType } from "../../Builder Classes/Format";
import { OutputBlock } from "../../Builder Classes/OutputBlock";

export class ConcFlexure_OutputBlock extends OutputBlock {

    constructor() {
        super();
    }

    Build() {
        // **** This is custom for each Block ****
        this.relativeInputBlockOrigin = [-8,-1];
        // ***************************************

        this.AddCellCurrentLocation(FormatType.IntermediateResults);
        this.AddCellRightOfLast(FormatType.Units);

        this.AddCellRelativeToLast(FormatType.IntermediateResults, [1, -1]);
        this.AddCellRightOfLast(FormatType.Units);

        this.AddCellRelativeToLast(FormatType.IntermediateResults, [1, -1]);
        this.AddCellRightOfLast(FormatType.Units);
    }
}