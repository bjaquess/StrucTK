/* eslint-disable no-unused-vars */
import { CellFormatter } from "../Builder Classes/CellFormatter";

export class Format {
    Italic: boolean = false;
    Alignment: string = 'Center';
    Bold: boolean = false;
    Underline: boolean = false;
    Background: string = 'none';
    Font: string = 'Calibri';
    FontColor: string = 'black';
    FontSize: number = 11;
    BorderAll: boolean = false;
    BorderTopBott: boolean = false;
    Number : string;
    Formatter: CellFormatter = new CellFormatter();
}

export enum FormatTypes {
    Label,
    Input,
    Explanatory,
    IntermediateResults,
    FinalResults,
    Equation,
    Units,
    Title,
    Reference,
    SectionDivider
}

export function GetFormatType(format: FormatTypes): Format {
    switch(format) {
        case FormatTypes.Label: { return new LabelCellFormat }
        case FormatTypes.Input: { return new InputCellFormat }
        case FormatTypes.Explanatory: { return new ExplanatoryCellFormat }
        case FormatTypes.IntermediateResults: { return new IntermediateResultsCellFormat }
        case FormatTypes.FinalResults: { return new FinalResultsCellFormat }
        case FormatTypes.Equation: { return new EquationCellFormat }
        case FormatTypes.Units: { return new UnitsCellFormat }
        case FormatTypes.Title: { return new TitleCellFormat }
        case FormatTypes.Reference: { return new ReferenceCellFormat }
        case FormatTypes.SectionDivider: { return new SectionDividerFormat }
        default: { return }
    }
}

export class LabelCellFormat extends Format {
    Alignment: string = 'Right';
}

export class InputCellFormat extends Format {
    Bold: boolean = true;
    Background: string = 'DAEEF3';
    BorderAll: boolean = true;
    Number : string = '0.00';
}

export class ExplanatoryCellFormat extends Format {
    Italic: boolean = true;
    Alignment: string = 'Left';
    FontColor: string = 'gray';
    FontSize: number = 10;
}

export class IntermediateResultsCellFormat extends Format {
    BorderAll: boolean = true;
    Number: string = '0.00';
}

export class FinalResultsCellFormat extends Format {
    Bold: boolean = true;
    FontSize: number = 12;
    BorderAll: boolean = true;
    Number: string = '0.00';
}

export class EquationCellFormat extends Format {
    Alignment: string = 'Left';
    Italic: boolean = true;
    FontSize: number = 10;
}


export class UnitsCellFormat extends Format {
    Alignment: string = 'Left';
}

export class TitleCellFormat extends Format {
    Alignment: string = 'Left';
    Bold: boolean = true;
    FontSize: number = 14;
}

export class ReferenceCellFormat extends Format {
    Alignment: string = 'Left';
    FontSize: number = 10;
}

export class SectionDividerFormat extends Format {
    Alignment: string = 'Left';
    Bold: boolean = true;
    Background: string = 'C0C0C0'
    Font: string = 'Calibri'
    FontColor: string = 'white'
    FontSize: number = 12;
    BorderTopBott = true;    
}
