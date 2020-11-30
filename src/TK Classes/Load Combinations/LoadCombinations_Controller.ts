/* global Excel, console */
//import { LoadCase } from "./LoadCase";
import { Controller } from "../../Builder Classes/Controller";
// eslint-disable-next-line no-unused-vars
import { LoadCombo, LoadComboTerm } from "./LoadCombination";
//import { LRFDLoadCombinations } from "./LRFDLoadCombinations";
//import { ASDLoadCombinations } from "./ASDLoadCombinations";
//import { ServiceLoadCombinations } from "./ServiceLoadCombinations";

class Load {
    magnitude: number;
    loadCase: string;
}

export async function onclick_LoadCombinations() {
    // *** Customize this section ******************************
  let onNewSheet: boolean = true;
  let trialSheetName: string = 'LoadComboTable';
  let LRFDCombos: boolean = true;
  let ASDCombos: boolean = false;
  let ServiceCombos: boolean = false;
  let calcBlock = new LoadCombinations_Controller(LRFDCombos, ASDCombos, ServiceCombos);
  // *********************************************************
  try {
    await calcBlock.Initialize(onNewSheet, trialSheetName);
    await Excel.run(async context => {
      const range = context.workbook.getSelectedRange();
      range.load("rowIndex");
      range.load("columnIndex");
      const ws = context.workbook.getSelectedRange().worksheet;
      ws.load("name");
      await context.sync();
      const shapes = context.workbook.worksheets.getItem(ws.name).shapes;
      const charts = context.workbook.worksheets.getItem(ws.name).charts;
      
      calcBlock.Execute(range, range.rowIndex, range.columnIndex, shapes, charts)
    });
  } catch (error) {console.error(error)}
}

export class LoadCombinations_Controller extends Controller {
    /* allLoadCombos: LoadCombo[];
    usedLoadCombs: LoadCombo[];

    includeLRFDCombos: boolean = false;
    LRFDLoadCombos: LRFDLoadCombinations;
    includeASDCombos: boolean = false;
    ASDLoadCombos: ASDLoadCombinations;
    includeServiceCombos: boolean = false;
    ServiceCombos: ServiceLoadCombinations; */

    constructor(LRFDCombos: boolean, ASDCombos: boolean, ServiceCombos: boolean) {
        super();
/*         this.allLoadCombos = [];
        this.usedLoadCombs = [];
        this.includeLRFDCombos = LRFDCombos;
        this.includeASDCombos = ASDCombos;
        this.includeServiceCombos = ServiceCombos;
        this.BuildAllCombos(); */
    }

    // eslint-disable-next-line no-unused-vars
    async Execute(range: Excel.Range, row: number, col: number, shapes: Excel.ShapeCollection, charts: Excel.ChartCollection) {
        
    }

    /* BuildComboTable(loadCases: string[][], magnitudes: number[][]): any[][] {
        let returnArray: any[][] = [];
                
        if (this.IsValidInput(loadCases, magnitudes)) {
            this.BuildUsedCombs(loadCases);
            returnArray = this.BuildReturnArray(magnitudes);
        }
        else { returnArray = [['#Invalid input']]}
    
        return returnArray;
    }

    BuildUsedCombs(loadCases: string[][]) {
        let thisCombo: LoadCombo = new LoadCombo();
        for(let i = 0; i < this.allLoadCombos.length; i++) {
            thisCombo = this.allLoadCombos[i];
            if(this.IncludeThisCombo(loadCases, thisCombo)) {
                let newCombo: LoadCombo = new LoadCombo();
                newCombo = this.allLoadCombos[i];
                this.usedLoadCombs.push(newCombo);
            }
        }
    }

    IncludeThisCombo(loadCases: string[][], thisLC: LoadCombo): boolean {
        let numTerms: number = thisLC.Terms.length;
        for (let i = 0; i < numTerms; i++) {
            if(!this.ComboTermMatchesUserLoadCase(loadCases, thisLC.Terms[i])) {
                return false
            }
        }
        return true
    }

    ComboTermMatchesUserLoadCase(loadCases: string[][], thisTerm: LoadComboTerm): boolean {
        for (let i = 0; i < loadCases.length; i++) {
            if(thisTerm.loadCase == loadCases[i][0] ||
                thisTerm.loadCase == 'D' ||
                thisTerm.loadCase == 'Ev') {
                return true
            }
        }
        return false
    }

    BuildReturnArray(magnitudes: number[][]): any[][] {
        let returnArray: any[] = [];
        let nRows: number = this.usedLoadCombs.length;
        let nCols: number = magnitudes[0].length;

        for (let i = 0; i < nRows; i++) {
            returnArray[i] = [];
            for (let j = 0; j < nCols; j++) {
                returnArray[i][0] = i + 1;
                returnArray[i][1] = this.usedLoadCombs[i].label;
                returnArray[i][j + 2] = 'Factored Load';
            }
        }
        return returnArray;
    }

    BuildAllCombos() {
        if (this.includeLRFDCombos) {
            this.LRFDLoadCombos = new LRFDLoadCombinations();
            if (this.allLoadCombos.length == 0) {
                this.allLoadCombos = this.LRFDLoadCombos.AllCombinations;
            } 
            else {
                this.allLoadCombos.concat(this.LRFDLoadCombos.AllCombinations);
            }
        }
        if (this.includeASDCombos) {
            this.ASDLoadCombos = new ASDLoadCombinations();
            if (this.allLoadCombos.length == 0) {
                this.allLoadCombos = this.ASDLoadCombos.AllCombinations;
            } 
            else {
                this.allLoadCombos.concat(this.ASDLoadCombos.AllCombinations);
            }
        }
        if (this.includeServiceCombos) {
            this.ServiceCombos = new ServiceLoadCombinations();
            if (this.allLoadCombos.length == 0) {
                this.allLoadCombos = this.ServiceCombos.AllCombinations;
            } 
            else {
                this.allLoadCombos.concat(this.ServiceCombos.AllCombinations);
            }
        }
    }

    IsValidInput(loadCases: string[][], magnitudes: number[][]): boolean {
        if (loadCases.length == magnitudes.length && 
            loadCases[0].length == 1) { 
            return true
        }
        else {return false}
    } */
}