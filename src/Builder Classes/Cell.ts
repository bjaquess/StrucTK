import { IntermediateResultsCellFormat, EquationCellFormat, ExplanatoryCellFormat, InputCellFormat, LabelCellFormat, FinalResultsCellFormat, UnitsCellFormat, TitleCellFormat, ReferenceCellFormat, Format} from './Format';


export class GenericCell {
    contents: number | string;
    format: Format;
    location: [number, number];

}



export interface Cell {
    Contents : number | string;
    Format : Format;
    Location : [number, number];    
    Size : [number, number]
}

export class BlankCell implements Cell {
    Contents: string | number = '';
    Format: Format;
    Location: [number, number];
    Size: [number, number];

    constructor() {

    }
}

export class CheckCell implements Cell {
    Contents: string | number = '';
    Format: Format;
    Location: [number, number];
    Size: [number, number];

    constructor() {

    }
}

export class EquationCell implements Cell {
    Contents: string | number = '';
    Format: Format;
    Location: [number, number];
    Size: [number, number];

    constructor() {
        this.Format = new EquationCellFormat();
    }
}

export class ExplanatoryCell implements Cell {
    Contents: string | number = '';
    Format: Format;
    Location: [number, number];
    Size: [number, number];

    constructor() {
        this.Format = new ExplanatoryCellFormat();
    }
}

export class InputCell implements Cell {
    Contents: string | number = '';
    Format: Format;
    Location: [number, number];
    Size: [number, number];

    constructor() {
        this.Format = new InputCellFormat();
    }
}

export class LabelCell implements Cell {
    Contents: string | number = '';
    Format: Format;
    Location: [number, number];
    Size: [number, number];

    constructor() {
        this.Format = new LabelCellFormat();
    }
}

export class IntermediateResultsCell implements Cell {
    Contents: string | number = '';
    Format: Format;
    Location: [number, number];
    Size: [number, number];

    constructor() {
        this.Format = new IntermediateResultsCellFormat();
    }
}

export class FinalResultsCell implements Cell {
    Contents: string | number = '';
    Format: Format;
    Location: [number, number];
    Size: [number, number];

    constructor() {
        this.Format = new FinalResultsCellFormat();
    }
}

export class UnitsCell implements Cell {
    Contents: string | number = '';
    Format: Format;
    Location: [number, number];
    Size: [number, number];

    constructor() {
        this.Format = new UnitsCellFormat();
    }
}

export class TitleCell implements Cell {
    Contents: string | number = '';
    Format: Format;
    Location: [number, number];
    Size: [number, number];

    constructor() {
        this.Format = new TitleCellFormat();
    }
}

export class ReferenceCell implements Cell {
    Contents: string | number = '';
    Format: Format;
    Location: [number, number];
    Size: [number, number];

    constructor() {
        this.Format = new ReferenceCellFormat();
    }
}

export class CellLocation {
    Row: number;
    Column: number;

    constructor() { }

    SetRowCol(row: number, col: number) {
        this.Row = row;
        this.Column = col;
    }

    GetLocation(): [number, number] {
        return [this.Row, this.Column]
    }
}