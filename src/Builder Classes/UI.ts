/* global console */

import { AddNewSheet } from "../Builder Functions/AddNewSheet";

export class UI {
    //originXlCell: Excel.Range;
    //originXlCellRow: number;
    //originXlCellCol: number;
    //currentXlRange: Excel.Range;
    //shapes: Excel.ShapeCollection;
    charts: Excel.ChartCollection;

    onNewSheet: boolean;
    trialSheetName: string;

    async Initialize(_onNewSheet: boolean, _trialSheetName: string) {
        try {
            if(_onNewSheet) {
                await AddNewSheet(_trialSheetName);
            }
        } catch (error) {console.error(error)}
    }
}