import { RebarProps } from "../../Builder Classes/RebarProps";

export class ConcFlexure_Functions {
    private b: number;
    private d: number;
    private fy: number;
    private fc: number;
    private beta1: number = 0.85;
    private nBars: number;
    private barSize: number;
    private phi: number = 0.9;
    //private barProps: RebarProps;

    constructor() {
        
    }

    Mn(As: number, fy: number, d: number, a: number ) {
        return As * fy * ( d - a/2 )
    }

    phiMn(As: number, fy: number, d: number, a: number ) {
        return this.phi * (this.Mn(As, fy, d, a));
    }

    a(beta1: number, fc: number, b: number, As: number, fy: number) {
        return As * fy / (beta1 * fc * b);
    }
    
    ReinfRatio(As: number, b: number, d: number) {
        return As / (b * d);
    }

    ResultsArray(nBars: number, barSize: string, fy: number, fc: number, d: number, b: number) {
        let barProps = new RebarProps();
        let _As = barProps.BarArea(barSize) * nBars;
        let _a = this.a(this.beta1, fc, b, _As, fy);
        let _phiMn = this.phiMn(_As, fy, d, _a);
        let _rhoMin = this.ReinfRatio(_As, b, d);

        let results = [];
        results.push([_As, 'in2']);
        results.push([_phiMn, 'in-k']);
        results.push([_rhoMin, '']);

        return results
    }
}