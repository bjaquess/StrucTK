import { CellFormatter } from "../Builder Classes/CellFormatter";

export interface Format {
    Alignment : string;
    Bold : boolean;
    Underline : boolean;
    Italic : boolean;
    Background : string;
    Font: string;
    FontColor : string;
    FontSize: number;
    Border : boolean;
    Number : string;
    Formatter : CellFormatter;
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
    Reference
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
        default: { return }
    }
}

export class LabelCellFormat implements Format {
    Italic: boolean = false;
    Alignment: string = 'Right';
    Bold: boolean = false;
    Underline: boolean = false;
    Background: string = 'none';
    Font: string = 'Calibri';
    FontColor: string = 'black';
    FontSize: number = 11;
    Border: boolean = false;
    Number : string;
    Formatter: CellFormatter = new CellFormatter();
}

export class InputCellFormat implements Format {
    Italic: boolean = false;
    Alignment: string = 'Center';
    Bold: boolean = true;
    Underline: boolean = false;
    Background: string = 'DAEEF3';
    Font: string = 'Calibri';
    FontColor: string = 'black';
    FontSize: number = 11;
    Border: boolean = true;
    Number : string = '0.00';
    Formatter: CellFormatter = new CellFormatter();
}

export class ExplanatoryCellFormat implements Format {
    Italic: boolean = true;
    Alignment: string = 'Left';
    Bold: boolean = false;
    Underline: boolean = false;
    Background: string = 'none';
    Font: string = 'Calibri';
    FontColor: string = 'gray';
    FontSize: number = 10;
    Border: boolean = false;
    Number : string;
    Formatter: CellFormatter = new CellFormatter();
}

export class IntermediateResultsCellFormat implements Format {
    Alignment: string = 'Center';
    Bold: boolean = false;
    Underline: boolean = false;
    Italic: boolean = false;
    Background: string = 'none';
    Font: string = 'Calibri';
    FontColor: string = 'black';
    FontSize: number = 11;
    Border: boolean = true;
    Number: string = '0.00';
    Formatter: CellFormatter = new CellFormatter();
}

export class FinalResultsCellFormat implements Format {
    Alignment: string = 'Center';
    Bold: boolean = true;
    Underline: boolean = false;
    Italic: boolean = false;
    Background: string = 'none';
    Font: string = 'Calibri';
    FontColor: string = 'black';
    FontSize: number = 12;
    Border: boolean = true;
    Number: string = '0.00';
    Formatter: CellFormatter = new CellFormatter();
}

export class EquationCellFormat implements Format {
    Alignment: string = 'Left';
    Bold: boolean = false;
    Underline: boolean = false;
    Italic: boolean = true;
    Background: string = 'none';
    Font: string = 'Calibri';
    FontColor: string = 'black';
    FontSize: number = 10;
    Border: boolean = false;
    Number: string;
    Formatter: CellFormatter = new CellFormatter();
}


export class UnitsCellFormat implements Format {
    Alignment: string = 'Left';
    Bold: boolean = false;
    Underline: boolean = false;
    Italic: boolean = false;
    Background: string = 'none';
    Font: string = 'Calibri';
    FontColor: string = 'black';
    FontSize: number = 11;
    Border: boolean = false;
    Number : string;
    Formatter: CellFormatter = new CellFormatter();
}

export class TitleCellFormat implements Format {
    Alignment: string = 'Left';
    Bold: boolean = true;
    Underline: boolean = false;
    Italic: boolean = false;
    Background: string = 'none';
    Font: string = 'Calibri';
    FontColor: string = 'black';
    FontSize: number = 14;
    Border: boolean = false;
    Number : string;
    Formatter: CellFormatter = new CellFormatter();
}

export class ReferenceCellFormat implements Format {
    Alignment: string = 'Left';
    Bold: boolean = false;
    Underline: boolean = false;
    Italic: boolean = true;
    Background: string = 'none';
    Font: string = 'Calibri';
    FontColor: string = 'black';
    FontSize: number = 10;
    Border: boolean = false;
    Number : string;
    Formatter: CellFormatter = new CellFormatter();
}


