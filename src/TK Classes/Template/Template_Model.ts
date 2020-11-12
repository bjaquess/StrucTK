
export class Template_Model {

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

        row[0] = 'A =';
        row[1] = _A;
        row[2] = 'in2';
        row[3] = 'A = b h';
        results.push(row);

        row = ['Ix =', _Ix, 'in4', 'I = b h^3 / 12'];
        results.push(row);

        row = ['Zx =', _Zx, 'in3', 'Z = b h^2 / 4'];
        results.push(row);

        return results
    }
}