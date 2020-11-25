import { DimensionString } from "./DimensionString";
import { Point } from "../Point";

export class DimensionStringHorz extends DimensionString {
    constructor(name: string, startLeft: number, startTop: number, endLeft: number, endTop: number, connectorLineTop: number) {
        super(name, startLeft, startTop, endLeft, endTop);
        this.connectorLineTop = connectorLineTop;
        this.Build();
    }

    Build() {
        let pt1 = new Point();
        pt1.x = this.startDimPointLeft;
        pt1.y = this.startDimPointTop;
        let pt2 = new Point();
        pt2.x = this.endDimPointLeft;
        pt2.y = this.endDimPointTop;
        let pt3 = new Point();
        pt3.y = this.connectorLineTop;
        if (pt3.y < pt1.y) {
            this.connLineAboveStartDimPoint = true;
        }
        if (pt3.y < pt2.y) {
            this.connLineAboveEndDimPoint = true;
        }

        this.startDimLine.name = `${this.name}StartDimLine`;        
        this.startDimLine.startLeft = pt1.x;
        this.startDimLine.endLeft = pt1.x;
        if (this.connLineAboveStartDimPoint) {
            this.startDimLine.startTop = pt1.y - this.dimPointOffset;
            this.startDimLine.endTop = this.connectorLineTop - this.dimLineExtension;
        } else {
            this.startDimLine.startTop = pt1.y + this.dimPointOffset;
            this.startDimLine.endTop = this.connectorLineTop + this.dimLineExtension;
        }

        this.endDimLine.name = `${this.name}EndDimLine`;
        this.endDimLine.startLeft = pt2.x;
        this.endDimLine.endLeft = pt2.x;
        if (this.connLineAboveEndDimPoint) {
            this.endDimLine.startTop = pt2.y - this.dimPointOffset;
            this.endDimLine.endTop = this.connectorLineTop - this.dimLineExtension;
        } else {
            this.endDimLine.startTop = pt2.y + this.dimPointOffset;
            this.endDimLine.endTop = this.connectorLineTop + this.dimLineExtension;
        }
        
        this.connectorLine.name = `${this.name}ConnectorLine`;
        this.connectorLine.startLeft = pt1.x;
        this.connectorLine.startTop = this.connectorLineTop;
        this.connectorLine.endLeft = pt2.x;
        this.connectorLine.endTop = this.connectorLineTop;

        this.textBox.name = `${this.name}TextBox`;
        this.textBox.top = this.connectorLineTop - this.textBox.height / 2;
        this.textBox.left = (pt1.x + pt2.x) / 2 - this.textBox.width / 2;

    }
}