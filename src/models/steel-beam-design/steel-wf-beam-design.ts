import { rowLabels, colHeadings, data, formatShapeInput } from "../../Lookup Tables/aisc-wf-shapes";

// Extract column from 2d Array
const arrayColumn = (arr: any[][], n) => arr.map(x => x[n]);

// Sort 2d array by column 'i'
const sortByColumn = (arr: any[][], n) => arr.sort((a,b) => a[n] - b[n]);

// Retrieve index within array
//const getIndex = (arr: any[][], val) => arr.indexOf(val);
function getIndex(arr: string[], val: string) {
    return arr.indexOf(val);
}

// Lookup section property
function tableLookup(data: any[][], rowLabel: string, colHeading: string) {
    let rowIndex: number = getIndex(rowLabels, rowLabel);
    let colIndex: number = getIndex(colHeadings, colHeading);
    return data[rowIndex][colIndex];
}

export default function(L: number, ContLb: string[][], 
    LbLocs: number[][], MaterialProps: number[][], 
    DefLimits: number[][], PtLoads: number[][], 
    DistLoads: number[][], WFShape: string): any[][] {
        let output = [];
        output.push([L]);
        output.push(...ContLb);
        output.push([LbLocs[0][0]]);
        output.push([MaterialProps[0][0]]);
        output.push([tableLookup(data, formatShapeInput(WFShape), 'd')]);
        return output;
}