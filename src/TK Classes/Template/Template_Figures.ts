import { Figures } from "../../Figures/Figures";
import { ConcreteSectionFormat } from "../../Figures/FigureFormats";
import { FrameShape } from "../../Figures/Blocks/Frame";
import { ConcreteSectionRect } from "../../Figures/Blocks/ConcreteSection";

export class Template_Figures extends Figures {
    concFormat: ConcreteSectionFormat;
    frame: FrameShape;
    concSection: ConcreteSectionRect;

    figureInsertPtLeft: number;
    figureInsertPtTop: number;
    
    constructor() {
        super();
        this.concFormat = new ConcreteSectionFormat();
        
        this.figureInsertPtLeft = 300;
        this.figureInsertPtTop = 30;

    }

    Assemble() {
        const frameWidth = 250;
        const frameHeight = 200;
        this.frame = new FrameShape(frameWidth, frameHeight);
    
        const insertPtLeft = 100;
        const insertPtTop = 25;
        const b = 100;
        const h = 150;
        this.concSection = new ConcreteSectionRect(b, h, insertPtLeft, insertPtTop);
            this.concSection.numBars = 4;
            this.concSection.barDiam = 6;
    }

    Apply(shapes: Excel.ShapeCollection) {
        //AddToShapeColl_Rect(shapes, shapeGroup, this.frame);
        this.frame.AddToShapeColl(shapes, this.shapeGroup);
        this.concSection.AddToShapeColl(shapes, this.shapeGroup);

        let groupedFigure = shapes.addGroup(this.shapeGroup);
        
        groupedFigure.incrementLeft(this.figureInsertPtLeft);
        groupedFigure.incrementTop(this.figureInsertPtTop);
    }
}