import { ThinLine, ArrowheadBoth } from "../Lines";
import { TextBox } from "../TextBox";
import { AddLineToShapeColl } from "../FigureFunctions/AddLineToShapeColl";
import { AddTextBoxToShapeColl } from "../FigureFunctions/AddTextBoxToShapeColl";

export class DimensionString {
    name: string;
    startDimLine: ThinLine;
    endDimLine: ThinLine;
    connectorLine: ArrowheadBoth;
    textBox: TextBox;

    startDimPointLeft: number;
    startDimPointTop: number;
    endDimPointLeft: number;
    endDimPointTop: number;

    // *** Default Settings ***//
    dimPointOffset: number = 8;
    dimLineExtension: number = 8;
    connectorLineLeft: number = 10;
    connectorLineTop: number = 10;
    connLineLeftOfStartDimPoint: boolean = false;
    connLineLeftOfEndDimPoint: boolean = false;
    connLineAboveStartDimPoint: boolean = false;
    connLineAboveEndDimPoint: boolean = false;

    constructor(name: string, startLeft: number, startTop: number, endLeft: number, endTop: number) {
        this.startDimLine = new ThinLine();
        this.endDimLine = new ThinLine();
        this.connectorLine = new ArrowheadBoth();
        this.textBox = new TextBox();

        this.name = name;
        this.startDimPointLeft = startLeft;
        this.startDimPointTop = startTop;
        this.endDimPointLeft = endLeft;
        this.endDimPointTop = endTop;
        this.textBox.contents = name;
    }

    AddToShapeColl(shapes: Excel.ShapeCollection, shapeGroup: Excel.Shape[]) {
        AddLineToShapeColl(shapes, shapeGroup, this.startDimLine);
        AddLineToShapeColl(shapes, shapeGroup, this.endDimLine);
        AddLineToShapeColl(shapes, shapeGroup, this.connectorLine);
        AddTextBoxToShapeColl(shapes, shapeGroup, this.textBox);
    }

}