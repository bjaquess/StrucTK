/* global Excel */

import { Shape } from "../Shape";
import { FrameFormat } from "../FigureFormats";

export class FrameShape extends Shape {
    format: FrameFormat;
    margin: number = 10;

    constructor(width: number, height: number) {
        super();
        this.format = new FrameFormat();
        this.name = "Frame";
        this.width = width;
        this.height = height;
    }

    AddToShapeColl(shapes: Excel.ShapeCollection, shapeGroup: Excel.Shape[]) {
        let f = shapes.addGeometricShape(Excel.GeometricShapeType.rectangle);
        //f.fill.setSolidColor("white");
        f.name = this.name;
        f.left = this.left;
        f.top = this.top;
        f.width = this.width;
        f.height = this.height;
        
        f.fill.setSolidColor(this.format.fillColor);
        f.lineFormat.color = this.format.lineColor;
        f.lineFormat.weight = this.format.lineWeight;
        shapeGroup.push(shapes.getItem(f.name));
    }

    LocalOriginLeft(): number {
        return this.margin;
    }

    LocalOriginTop(): number {
        return this.margin;
    }

    DrawingAreaWidth(): number {
        return this.width - 2 * this.margin;
    }

    DrawingAreaHeight(): number {
        return this.height - 2 * this.margin;
    }
}