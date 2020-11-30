

export class Figures {
    shapeGroup: Excel.Shape[];
    figureInsertPtLeft: number;
    figureInsertPtTop: number;

    constructor() {
        this.shapeGroup = []; 
    }

    /* ApplyFigures(shapes: Excel.ShapeCollection) {


        this.NewLine(shapes, 200, 250, 300, 300);
        this.shapeGroup.push(shapes.getItemAt(3));

        let shapeGroup = shapes.addGroup(this.shapeGroup);
        shapeGroup.incrementLeft(100);
    }


    NewLine(shapes: Excel.ShapeCollection, startLeft: number, startTop: number, endLeft: number, endTop: number) {
        let line = shapes.addLine(startLeft, startTop, endLeft, endTop);
        line.lineFormat.color = "black";
        line.lineFormat.weight = 3;
        line.line.beginArrowheadStyle = "Stealth";
        line.line.endArrowheadLength = "Short";
        
    } */
}