//import { Format } from "../Component Classes/Format";
import { Format } from "../Builder Classes/Format";

export class CellFormatter {
    ApplyFormatting(cell: Excel.Range, format: Format) {
        switch (format.Alignment) {
            case 'Left':
                cell.format.horizontalAlignment = 'Left';
                break;
            case 'Center':
                cell.format.horizontalAlignment = 'Center';
                break;
            case 'Right':
                cell.format.horizontalAlignment = 'Right';
                break;
            default:
                cell.format.horizontalAlignment = 'General';
                break;
        }
        
        cell.format.font.bold = format.Bold;
        
        cell.format.font.italic = format.Italic;

        if (format.Underline) {cell.format.font.underline = 'Single'}
        else {cell.format.font.underline = 'None'}

        if ((format.Background == null) || (format.Background == 'none')) {
            cell.format.fill.clear();        }    
        else {cell.format.fill.color = format.Background}

        if (format.Font) {cell.format.font.name = format.Font}

        if (format.FontColor) {cell.format.font.color = format.FontColor}

        if (format.FontSize) {cell.format.font.size = format.FontSize}

        if (format.Border) {
            cell.format.borders.getItem('EdgeTop').style = 'Continuous';
            cell.format.borders.getItem('EdgeBottom').style = 'Continuous';
            cell.format.borders.getItem('EdgeLeft').style = 'Continuous';
            cell.format.borders.getItem('EdgeRight').style = 'Continuous'
        }

        if (format.Number) {cell.numberFormat = [[format.Number]]}
    }
   
}