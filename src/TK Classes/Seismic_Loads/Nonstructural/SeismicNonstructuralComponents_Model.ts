
export class SeismicNonStructuralComponents_Model {
    ap: number;
    Rp: number;
    Sds: number;
    Ip: number;
    z: number;
    h: number;
    Wp: number;

    constructor() {
        this.Ip = 1;
        this.Rp = 1;
        this.h = 1;
        this.Wp = 1;
    }

    Fp(Sds : number, ap : number, Rp : number, Ip : number, z : number, h : number, Wp : number) : number {
        return 0.4 * ap * Sds * Wp / (Rp / Ip) * (1 + 2 * z / h)
    }

    FpMax(Sds: number, Ip: number, Wp: number) : number {
        return 1.6 * Sds * Ip * Wp
    }

    FpMin(Sds: number, Ip: number, Wp: number) : number {
        return 0.3 * Sds * Ip * Wp
    }

    FpGoverning(Fp: number, FpMax: number, FpMin: number) : number {
        let fpGov : number = Fp;
        if (fpGov > FpMax) {fpGov = FpMax}
        else {
            if (fpGov < FpMin) {fpGov = FpMin}
        }
        return fpGov;
    }

    ResultsArray(Sds : number, ap : number, Rp : number, Ip : number, z : number, h : number, Wp : number) : any[][] {
        let results = [];
        let row1 = [];
        let fp = this.Fp(Sds, ap, Rp, Ip, z, h, Wp);
        let fpMax = this.FpMax(Sds, Ip, Wp);
        let fpMin = this.FpMin(Sds, Ip, Wp);

        row1[0] = "Fp =";
        row1[1] = fp;
        row1[2] = "lbs";
        row1[3] = "Fp = 0.4 ap Sds Wp (1 + 2 z/h) / (Rp / Ip)  [13.3-1]";
        results.push(row1);

        let row2 = [];
        row2[0] = "Fp max = ";
        row2[1] = fpMax;
        row2[2] = "lbs";
        row2[3] = "Fp <= 1.6 Sds Ip Wp  [13.3-2]"
        results.push(row2);

        let row3 = [];
        row3[0] = "Fp min =";
        row3[1] = fpMin;
        row3[2] = "lbs";
        row3[3] = "Fp >= 0.3 Sds Ip Wp  [13.3-3]";
        results.push(row3);

        let row4 = [];
        row4[0] = "Fp =";
        row4[1] = this.FpGoverning(fp, fpMax, fpMin);
        row4[2] = "lbs";
        row4[3] = '';
        results.push(row4);

        return results
    }
}
