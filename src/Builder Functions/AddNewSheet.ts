/* global Excel */

// eslint-disable-next-line no-unused-vars
import { NewSheet } from "../Builder Classes/NewSheet";

export async function AddNewSheet(newSht: NewSheet) {
    try {
        await Excel.run(async context => {
            var sheets = context.workbook.worksheets;

            sheets.load();
            await context.sync();

            let trySheetName: string = newSht.trialSheetName;
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
                    trySheetName = `${newSht.trialSheetName}${sheetNameSuffix.toString()}`
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
