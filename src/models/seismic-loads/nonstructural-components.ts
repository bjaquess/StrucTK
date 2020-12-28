function Fp(Sds : number, ap : number, Rp : number, Ip : number, z : number, h : number, Wp : number) : number {
    return 0.4 * ap * Sds * Wp / (Rp / Ip) * (1 + 2 * z / h)
}

function FpMax(Sds: number, Ip: number, Wp: number) : number {
    return 1.6 * Sds * Ip * Wp
}

function FpMin(Sds: number, Ip: number, Wp: number) : number {
    return 0.3 * Sds * Ip * Wp
}

function FpGoverning(Fp: number, FpMax: number, FpMin: number) : number {
    let fpGov : number = Fp;
    if (fpGov > FpMax) {fpGov = FpMax}
    else {
        if (fpGov < FpMin) {fpGov = FpMin}
    }
    return fpGov;
}

export default function(Sds : number, ap : number, Rp : number, Ip : number, z : number, h : number, Wp : number) : any[][] {
    const fp = Fp(Sds, ap, Rp, Ip, z, h, Wp);
    const fpMin = FpMin(Sds, Ip, Wp);
    const fpMax = FpMax(Sds, Ip, Wp);
    return [
        [fp],
        [fpMax],
        [fpMin],
        [FpGoverning(fp, fpMax, fpMin)]
    ];
}