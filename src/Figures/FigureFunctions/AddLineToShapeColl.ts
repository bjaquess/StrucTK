// eslint-disable-next-line no-unused-vars
import { ILine } from "../Lines";

export function AddLineToShapeColl(shapes: Excel.ShapeCollection, shapeGroup: Excel.Shape[], line: ILine) {
    let startLeft = line.startLeft;
    let startTop = line.startTop;
    let endLeft = line.endLeft;
    let endTop = line.endTop;
    let lineShape = shapes.addLine(startLeft, startTop, endLeft, endTop);
        lineShape.name = line.name;
        lineShape.lineFormat.color = line.color;
        lineShape.lineFormat.weight = line.weight;
        switch (line.beginArrowheadStyle) {
            case 'None':
                lineShape.line.beginArrowheadStyle = 'None';
                break;
            case 'Stealth': 
                lineShape.line.beginArrowheadStyle = 'Stealth';
                break;
            case 'Diamond':
                lineShape.line.beginArrowheadStyle = 'Diamond';
                break;
            case 'Triangle':
                lineShape.line.beginArrowheadStyle = 'Triangle';
                break;
            case 'Oval':
                lineShape.line.beginArrowheadStyle = 'Oval';
                break;
            case 'Open':
                lineShape.line.beginArrowheadStyle = 'Open';
                break;
            default:
                lineShape.line.beginArrowheadStyle = 'None';
                break;
        }
        
        switch (line.beginArrowheadLength) {
            case 'Long':
                lineShape.line.beginArrowheadLength = 'Long';
                break;
            case 'Medium':
                lineShape.line.beginArrowheadLength = 'Medium';
                break;
            case 'Short':
                lineShape.line.beginArrowheadLength = 'Short';
                break;
            default:
                lineShape.line.beginArrowheadLength = 'Medium';
                break;
        }

        switch (line.beginArrowheadWidth) {
            case 'Narrow':
                lineShape.line.beginArrowheadWidth = 'Narrow';
                break;
            case 'Medium':
                lineShape.line.beginArrowheadWidth = 'Medium';
                break;
            case 'Wide':
                lineShape.line.beginArrowheadWidth = 'Wide';
                break;
            default:
                lineShape.line.beginArrowheadWidth = 'Narrow';
        }
    

        switch (line.endArrowheadStyle) {
            case 'None':
                lineShape.line.endArrowheadStyle = 'None';
                break;
            case 'Stealth': 
                lineShape.line.endArrowheadStyle = 'Stealth';
                break;
            case 'Diamond':
                lineShape.line.endArrowheadStyle = 'Diamond';
                break;
            case 'Triangle':
                lineShape.line.endArrowheadStyle = 'Triangle';
                break;
            case 'Oval':
                lineShape.line.endArrowheadStyle = 'Oval';
                break;
            case 'Open':
                lineShape.line.endArrowheadStyle = 'Open';
                break;
            default:
                lineShape.line.endArrowheadStyle = 'None';
                break;
        }
        
        switch (line.endArrowheadLength) {
            case 'Long':
                lineShape.line.endArrowheadLength = 'Long';
                break;
            case 'Medium':
                lineShape.line.endArrowheadLength = 'Medium';
                break;
            case 'Short':
                lineShape.line.endArrowheadLength = 'Short';
                break;
            default:
                lineShape.line.endArrowheadLength = 'Medium';
                break;
        }

        switch (line.endArrowheadWidth) {
            case 'Narrow':
                lineShape.line.endArrowheadWidth = 'Narrow';
                break;
            case 'Medium':
                lineShape.line.endArrowheadWidth = 'Medium';
                break;
            case 'Wide':
                lineShape.line.endArrowheadWidth = 'Wide';
                break;
            default:
                lineShape.line.endArrowheadWidth = 'Narrow';
                break;
        }
    shapeGroup.push(shapes.getItem(lineShape.name));

}