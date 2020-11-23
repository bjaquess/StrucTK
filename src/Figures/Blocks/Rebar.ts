import { RebarSectionFormat } from "../FigureFormats";
import { Shape } from "../Shape";

export class RebarSection extends Shape {
    format: RebarSectionFormat;
    diam: number;

    constructor(d: number) {
        super();
        this.format = new RebarSectionFormat();
        this.diam = d;
        this.width = d;
        this.height = d;
    }

  
}