export interface FigureFormat {
    fillColor: string;
    lineColor: string;
    lineWeight: number;
}

export class FrameFormat implements FigureFormat {
    fillColor: string = "white";
    lineColor: string = "white";
    lineWeight: number = 0;

}

export class ConcreteSectionFormat implements FigureFormat {
    fillColor: string = "#EAEAEA";
    lineColor: string = "black";
    lineWeight: number = 1;
}

export class RebarSectionFormat implements FigureFormat {
    fillColor: string = "black";
    lineColor: string = "black";
    lineWeight: number = 1;
}
