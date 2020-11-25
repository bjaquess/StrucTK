import { Figures } from "../../Figures/Figures";
import { ConcreteSectionFormat } from "../../Figures/FigureFormats";
import { FrameShape } from "../../Figures/Blocks/Frame";
import { ConcreteSectionRect } from "../../Figures/Blocks/ConcreteSection";
import { DimensionStringVert } from "../../Figures/Blocks/DimensionStringVert";
import { DimensionStringHorz } from "../../Figures/Blocks/DimensionStringHorz";

export class Template_Figures extends Figures {
    concFormat: ConcreteSectionFormat;
    frame: FrameShape;
    concSection: ConcreteSectionRect;
    dimStrVert_h: DimensionStringVert;
    dimStrVert_d: DimensionStringVert;
    dimStrHorz_b: DimensionStringHorz;

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
        const frameHeight = 220;
        this.frame = new FrameShape(frameWidth, frameHeight);
    
        const insertPtLeft = 100;
        const insertPtTop = 25;
        const b = 100;
        const h = 150;
        this.concSection = new ConcreteSectionRect(b, h, insertPtLeft, insertPtTop);
            this.concSection.numBars = 4;
            this.concSection.barDiam = 6;
        
        const hDimEndTop = insertPtTop + h;
        const hConnLineLeft = insertPtLeft - 50;
        this.dimStrVert_h = new DimensionStringVert('h', insertPtLeft, insertPtTop, insertPtLeft, hDimEndTop, hConnLineLeft);
            
        const dDimEndTop = hDimEndTop - this.concSection.clrBott - this.concSection.barDiam / 2;
        const dConnLineLeft = insertPtLeft - 35;
        this.dimStrVert_d = new DimensionStringVert('d', insertPtLeft, insertPtTop, insertPtLeft, dDimEndTop, dConnLineLeft);

        const bDimEndLeft = insertPtLeft + b;
        const bDimTop = insertPtTop + h;
        const bConnLineTop = bDimTop + 20;
        this.dimStrHorz_b = new DimensionStringHorz('b', insertPtLeft, bDimTop, bDimEndLeft, bDimTop, bConnLineTop);
    }

    Apply(shapes: Excel.ShapeCollection) {
        this.frame.AddToShapeColl(shapes, this.shapeGroup);
        this.concSection.AddToShapeColl(shapes, this.shapeGroup);
        this.dimStrVert_h.AddToShapeColl(shapes, this.shapeGroup);
        this.dimStrVert_d.AddToShapeColl(shapes, this.shapeGroup);
        this.dimStrHorz_b.AddToShapeColl(shapes, this.shapeGroup);

        let groupedFigure = shapes.addGroup(this.shapeGroup);
        groupedFigure.incrementLeft(this.figureInsertPtLeft);
        groupedFigure.incrementTop(this.figureInsertPtTop);
    }
}