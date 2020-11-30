// eslint-disable-next-line no-unused-vars
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
        
        cell.format.font.bold = format.isBold;
        
        cell.format.font.italic = format.isItalic;

        if (format.isUnderlined) {cell.format.font.underline = 'Single'}
        else {cell.format.font.underline = 'None'}

        if ((format.Background == null) || (format.Background == 'none')) {
            cell.format.fill.clear();        }    
        else {cell.format.fill.color = format.Background}

        if (format.Font) {cell.format.font.name = format.Font}

        if (format.FontColor) {cell.format.font.color = format.FontColor}

        if (format.FontSize) {cell.format.font.size = format.FontSize}

        if (format.hasBorderAll) {
            cell.format.borders.getItem('EdgeTop').style = 'Continuous';
            cell.format.borders.getItem('EdgeBottom').style = 'Continuous';
            cell.format.borders.getItem('EdgeLeft').style = 'Continuous';
            cell.format.borders.getItem('EdgeRight').style = 'Continuous'
        }

        if (format.hasBorderTopBott) {
            cell.format.borders.getItem('EdgeTop').style = 'Continuous';
            cell.format.borders.getItem('EdgeTop').color = 'White';
            cell.format.borders.getItem('EdgeTop').weight = 'Medium';
            cell.format.borders.getItem('EdgeBottom').style = 'Continuous';
            cell.format.borders.getItem('EdgeBottom').color = 'White';
            cell.format.borders.getItem('EdgeBottom').weight = 'Medium';
        }
        
        if (format.hasBorderBott) {
            cell.format.borders.getItem('EdgeBottom').style = 'Continuous';
            cell.format.borders.getItem('EdgeBottom').weight = 'Medium';
        }

        if (format.hasBorderLeftBott) {
            cell.format.borders.getItem('EdgeBottom').style = 'Continuous';
            cell.format.borders.getItem('EdgeBottom').weight = 'Medium';
            cell.format.borders.getItem('EdgeLeft').style = 'Continuous';
        }

        if (format.Number) {cell.numberFormat = [[format.Number]]}

        if (format.isDropDownList) {
            cell.dataValidation.rule = {
                list: {
                    inCellDropDown: true,
                    source: format.DropDownListItems
                }
            }
        }
    }
   
}