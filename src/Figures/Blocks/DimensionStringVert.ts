// eslint-disable-next-line no-unused-vars
import { DimensionString } from "./DimensionString";
import { Point } from "../Point";

export class DimensionStringVert extends DimensionString {

    constructor(name: string, startLeft: number, startTop: number, endLeft: number, endTop: number, connectorLineLeft: number) {
        super(name, startLeft, startTop, endLeft, endTop);

        this.connectorLineLeft = connectorLineLeft;
        this.textBox.rotation = -90;

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
        pt3.x = this.connectorLineLeft;
        if (pt3.x < pt1.x) {
            this.connLineLeftOfStartDimPoint = true;
        }
        if (pt3.x < pt2.x) {
            this.connLineLeftOfEndDimPoint = true;
        }

        this.startDimLine.name = `${this.name}StartDimLine`;        
        this.startDimLine.startTop = pt1.y;
        this.startDimLine.endTop = pt1.y;
        if (this.connLineLeftOfStartDimPoint) {
            this.startDimLine.startLeft = pt1.x - this.dimPointOffset;
            this.startDimLine.endLeft = this.connectorLineLeft - this.dimLineExtension;
        } else {
            this.startDimLine.startLeft = pt1.x + this.dimPointOffset;
            this.startDimLine.endLeft = this.connectorLineLeft + this.dimLineExtension;
        }

        this.endDimLine.name = `${this.name}EndDimLine`;
        this.endDimLine.startTop = pt2.y;
        this.endDimLine.endTop = pt2.y;
        if (this.connLineLeftOfEndDimPoint) {
            this.endDimLine.startLeft = pt2.x - this.dimPointOffset;
            this.endDimLine.endLeft = this.connectorLineLeft - this.dimLineExtension;
        } else {
            this.endDimLine.startLeft = pt2.x + this.dimPointOffset;
            this.endDimLine.endLeft = this.connectorLineLeft + this.dimLineExtension;
        }
        
        this.connectorLine.name = `${this.name}ConnectorLine`;
        this.connectorLine.startLeft = this.connectorLineLeft;
        this.connectorLine.startTop = pt1.y;
        this.connectorLine.endLeft = this.connectorLineLeft;
        this.connectorLine.endTop = pt2.y;

        this.textBox.name = `${this.name}TextBox`;
        this.textBox.left = this.connectorLineLeft - this.textBox.width / 2;
        this.textBox.top = (pt1.y + pt2.y) / 2 - this.textBox.height / 2;
    }
}

