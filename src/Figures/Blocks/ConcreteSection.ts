

import { ConcreteSectionFormat } from "../FigureFormats";
import { Shape } from "../Shape";
import { RebarSection } from "./Rebar";
//import { AddToShapeColl_Rect } from "../AddToShapeColl";

export class ConcreteSectionRect extends Shape {
    format: ConcreteSectionFormat;
    numBars: number = 4;
    barDiam: number = 8;
    bar: RebarSection;
    clrBott: number = 15;
    clrSides: number = 15;
    rebarColl: RebarSection[];

    constructor(b: number, h: number, insertPtLeft: number, insertPtTop: number) {
        super();
        this.format = new ConcreteSectionFormat();
        this.rebarColl = [];
        this.width = b;
        this.height = h;
        this.left = insertPtLeft;
        this.top = insertPtTop;
        this.name = "ConcreteSection";
    }

    AddToShapeColl(shapes: Excel.ShapeCollection, shapeGroup: Excel.Shape[]) {
        this.AddNewRectangle(shapes, shapeGroup);
        
        this.BuildRebarColl();
        this.rebarColl.forEach(bar => {
            bar.AddNewCircle(shapes, shapeGroup);
        });

    }

    BuildRebarColl() {
        let firstBarLeft = this.left + this.clrSides;
        let lastBarLeft = this.left + this.width - this.clrSides - this.barDiam;
        let allBarsTop = this.top + this.height - this.clrBott - this.barDiam;
        let barSpace = (lastBarLeft - firstBarLeft) / (this.numBars - 1);
        for (let i = 0; i < this.numBars; i++) {
            this.bar = new RebarSection(this.barDiam);
            this.bar.left = firstBarLeft + i * barSpace;
            this.bar.top = allBarsTop;
            this.bar.name = `Bar${i}`;
            this.rebarColl.push(this.bar);
        }
    }
}
