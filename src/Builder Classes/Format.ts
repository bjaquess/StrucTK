/* eslint-disable no-unused-vars */
import { CellFormatter } from "../Builder Classes/CellFormatter";

export class Format {
    isItalic: boolean = false;
    Alignment: string = 'Center';
    isBold: boolean = false;
    isUnderlined: boolean = false;
    Background: string = 'none';
    Font: string = 'Calibri';
    FontColor: string = 'black';
    FontSize: number = 11;
    hasBorderAll: boolean = false;
    hasBorderTopBott: boolean = false;
    hasBorderBott: boolean = false;
    hasBorderLeftBott: boolean = false;
    isDropDownList: boolean = false;
    DropDownListItems: string | Excel.Range;
    Number : string;
    Formatter: CellFormatter = new CellFormatter();
}

export enum FormatType {
    Label,
    Input,
    Explanatory,
    IntermediateResults,
    FinalResults,
    Equation,
    Units,
    Title,
    Reference,
    SectionDivider,
    InputFromList,
    BorderBott,
    BorderLeftBott
}

export function GetFormatType(format: FormatType): Format {
    switch(format) {
        case FormatType.Label: { return new LabelCellFormat }
        case FormatType.Input: { return new InputCellFormat }
        case FormatType.Explanatory: { return new ExplanatoryCellFormat }
        case FormatType.IntermediateResults: { return new IntermediateResultsCellFormat }
        case FormatType.FinalResults: { return new FinalResultsCellFormat }
        case FormatType.Equation: { return new EquationCellFormat }
        case FormatType.Units: { return new UnitsCellFormat }
        case FormatType.Title: { return new TitleCellFormat }
        case FormatType.Reference: { return new ReferenceCellFormat }
        case FormatType.SectionDivider: { return new SectionDividerFormat }
        case FormatType.InputFromList: { return new InputFromListCellFormat}
        case FormatType.BorderBott: { return new BorderBott }
        case FormatType.BorderLeftBott: { return new BorderLeftBott}
        default: { return }
    }
}

export class LabelCellFormat extends Format {
    Alignment: string = 'Right';
}

export class InputFromListCellFormat extends Format {
    isBold: boolean = true;
    Background: string = 'DAEEF3';
    hasBorderAll: boolean = true;
    Number : string = '0.00';
    isDropDownList: boolean = true;
}

export class InputCellFormat extends Format {
    isBold: boolean = true;
    Background: string = 'DAEEF3';
    hasBorderAll: boolean = true;
    Number : string = '0.00';
}

export class ExplanatoryCellFormat extends Format {
    isItalic: boolean = true;
    Alignment: string = 'Left';
    FontColor: string = 'gray';
    FontSize: number = 10;
}

export class IntermediateResultsCellFormat extends Format {
    hasBorderAll: boolean = true;
    Number: string = '0.00';
}

export class FinalResultsCellFormat extends Format {
    isBold: boolean = true;
    FontSize: number = 12;
    hasBorderAll: boolean = true;
    Number: string = '0.00';
}

export class EquationCellFormat extends Format {
    Alignment: string = 'Left';
    isItalic: boolean = true;
    FontSize: number = 10;
}

export class UnitsCellFormat extends Format {
    Alignment: string = 'Left';
}

export class TitleCellFormat extends Format {
    Alignment: string = 'Left';
    isBold: boolean = true;
    FontSize: number = 14;
}

export class ReferenceCellFormat extends Format {
    Alignment: string = 'Left';
    FontSize: number = 10;
}

export class SectionDividerFormat extends Format {
    Alignment: string = 'Left';
    isBold: boolean = true;
    Background: string = 'C0C0C0'
    Font: string = 'Calibri'
    FontColor: string = 'white'
    FontSize: number = 12;
    hasBorderTopBott = true;    
}

export class BorderBott extends Format {
    Alignment: string = 'Center';
    hasBorderBott = true;
}

export class BorderLeftBott extends Format {
    Alignment: string = 'Center';
    hasBorderLeftBott = true;
}