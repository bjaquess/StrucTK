/* global Excel */

export async function AddNewSheet(trialSheetName: string) {
    try {
        await Excel.run(async context => {
            var sheets = context.workbook.worksheets;

            sheets.load();
            await context.sync();

            let trySheetName: string = trialSheetName;
            let uniqueSheetName: boolean = true; 
            let keepTrying: boolean = true;
            let sheetNameSuffix: number = 0;

            while (keepTrying) {
                context.workbook.worksheets.items.forEach(function (ws: Excel.Worksheet) {
                    if (ws.name == trySheetName) { uniqueSheetName = false }
                });
                await context.sync();
                if (uniqueSheetName) {
                    keepTrying = false;
                }
                else {
                    sheetNameSuffix++;
                    trySheetName = `${trialSheetName}${sheetNameSuffix.toString()}`
                    uniqueSheetName = true;
                    if (sheetNameSuffix < 100) {
                        keepTrying = true;
                    }
                    else { keepTrying = false;}
                }
            }
            context.workbook.worksheets.add(trySheetName).activate();

            await context.sync()    
        });
    } catch (error) {
        if (error) { return 'Error' }
    }
}
