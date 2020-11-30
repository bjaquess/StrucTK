
export class Template_Model {
    //private b: number;
    //private h: number;
    constructor() {
    }

    A(b: number, h: number) {
        return b * h
    }

    Ix(b: number, h: number) {
        return b * h ** 3 / 12
    }

    Zx(b: number, h: number) {
        return b * h ** 2 / 4
    }

    ResultsArray(b: number, h: number) {
        let results = [];
        let row = [];
        let _A = this.A(b, h);
        let _Ix = this.Ix(b, h);
        let _Zx = this.Zx(b,h);

        row = [_A, 'in2'];
        results.push(row);

        row = [_Ix, 'in4'];
        results.push(row);

        row = [_Zx, 'in3'];
        results.push(row);

        return results
    }
}