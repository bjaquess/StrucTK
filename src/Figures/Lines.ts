
export interface ILine {
    name: string;
    startLeft: number;
    startTop: number;
    endLeft: number;
    endTop: number;
    color: string;
    weight: number;
    beginArrowheadStyle: string;
    beginArrowheadLength: string;
    beginArrowheadWidth: string;
    endArrowheadStyle: string;
    endArrowheadLength: string;
    endArrowheadWidth: string;

}

export class ThinLine implements ILine {
    name: string;
    startLeft: number;
    startTop: number;
    endLeft: number;
    endTop: number;
    color: string = 'black';
    weight: number = 0;
    beginArrowheadStyle: string = 'None';
    beginArrowheadLength: string = 'None';
    endArrowheadStyle: string = 'None';
    endArrowheadLength: string = 'None';
    beginArrowheadWidth: string;
    endArrowheadWidth: string;
}

export class ArrowheadBoth implements ILine {
    name: string;
    startLeft: number;
    startTop: number;
    endLeft: number;
    endTop: number;
    color: string = 'black';
    weight: number = 0;
    beginArrowheadStyle: string = 'Stealth';
    beginArrowheadLength: string = 'Medium';
    beginArrowheadWidth: string = 'Narrow';
    endArrowheadStyle: string = 'Stealth';
    endArrowheadLength: string = 'Medium';
    endArrowheadWidth: string = 'Narrow';
}

export class ArrowheadStart implements ILine {
    name: string;
    startLeft: number;
    startTop: number;
    endLeft: number;
    endTop: number;
    color: string = "black";
    weight: number = 0;
    beginArrowheadStyle: string = "Stealth";
    beginArrowheadLength: string = "Short";
    endArrowheadStyle: string = 'None';
    endArrowheadLength: string = 'None';
    beginArrowheadWidth: string;
    endArrowheadWidth: string;
}