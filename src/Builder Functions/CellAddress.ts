
export function CellAddress(origin : [number, number], relativeLoc : [number, number]) : string {
    let cellAddress : string;
    let originRow : number = origin[0];
    let originCol : number = origin[1];
    let absRow : number;
    let absCol : number;
    let absColStr : string;
    let colDigit1 : string;
    let colDigit2 : string;
    let colDigit3 : string;

    absRow = originRow + relativeLoc[0] + 1;
    absCol = originCol + relativeLoc[1];

    absRow = Math.min(absRow, 1048576); // Max allowable number of rows in Excel
    absCol = Math.min(absCol, 16384); // Max allowable number of columns in Excel
    
    colDigit1 = String.fromCharCode(65 + (absCol) % 26);

    if (absCol < 26) { 
        absColStr = colDigit1 }
    else if (absCol < 702) { 
        colDigit2 = String.fromCharCode(65 + (Math.trunc((absCol - 26) / 26) % 26));
        absColStr = `${colDigit2}${colDigit1}` }
    else if (absCol >= 702) { 
        colDigit2 = String.fromCharCode(65 + (Math.trunc((absCol - 26) / 26) % 26));
        colDigit3 = String.fromCharCode(65 + (Math.trunc((absCol - 26 ** 2) / 26 ** 2) % 26));
        absColStr = `${colDigit3}${colDigit2}${colDigit1}` }
    
    cellAddress = `${absColStr}${absRow.toString()}`;
    return cellAddress;
}
