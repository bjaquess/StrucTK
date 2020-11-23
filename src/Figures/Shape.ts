/* global Excel */

// eslint-disable-next-line no-unused-vars
import { FigureFormat } from "./FigureFormats";

export class Shape {
    left: number = 0;
    top: number = 0;
    width: number;
    height: number;
    name: string;

    format: FigureFormat;

    AddNewRectangle(shapes: Excel.ShapeCollection, shapeGroup: Excel.Shape[]) {
        let s = shapes.addGeometricShape(Excel.GeometricShapeType.rectangle);
        s.name = this.name;
        s.left = this.left;
        s.top = this.top;
        s.width = this.width;
        s.height = this.height;
        s.fill.setSolidColor(this.format.fillColor);
        s.lineFormat.color = this.format.lineColor;
        s.lineFormat.weight = this.format.lineWeight;
        shapeGroup.push(shapes.getItem(s.name));
    }

    AddNewCircle(shapes: Excel.ShapeCollection, shapeGroup: Excel.Shape[]) {
        let s = shapes.addGeometricShape(Excel.GeometricShapeType.ellipse);
            s.name = this.name;
            s.left = this.left;
            s.top = this.top;
            s.width = this.width;
            s.height = this.height;
            s.fill.setSolidColor(this.format.fillColor);
            s.lineFormat.color = this.format.lineColor;
            s.lineFormat.weight = this.format.lineWeight;
            shapeGroup.push(shapes.getItem(s.name));
    }
}