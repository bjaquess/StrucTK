/* global Excel */

export async function PasteSingleValueToCell(val: string | number, sheet: string, row: number, col: number) {
    await Excel.run(async (context) => {
        const r = context.workbook.worksheets.getItem(sheet).getRangeByIndexes(row, col, 1, 1);
        r.values = [[val]]
    })
}

export async function PasteArrayToRange(array: [], sheet: string, row: number, col: number) {
    await Excel.run(async (context) => {
        const r = context.workbook.worksheets.getItem(sheet).getRangeByIndexes(row, col, 1, 1);
        r.values = array;
    })    
}