/* global Excel */

export const OriginXLCellRow = async() => {
    return await Excel.run(async (context) => {
      const r = context.workbook.getSelectedRange();
      r.load("rowIndex");
      await context.sync();
      return r.rowIndex
    })
}

export const OriginXLCellCol = async() => {
    return await Excel.run(async (context) => {
        const r = context.workbook.getSelectedRange();
        r.load("columnIndex");
        await context.sync();
    return r.columnIndex
})
}

export const OriginXLCell = async() => {
    return await Excel.run(async (context) => {
        const r = context.workbook.getSelectedRange();
        r.load("address");
        await context.sync();
    return r
    })
}