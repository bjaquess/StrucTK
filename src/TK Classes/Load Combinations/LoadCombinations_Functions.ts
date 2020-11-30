// eslint-disable-next-line no-unused-vars
import { LoadCombo, LoadComboTerm } from "./LoadCombination";
import { LRFDLoadCombinations } from "./LRFDLoadCombinations";
import { ASDLoadCombinations } from "./ASDLoadCombinations";
import { ServiceLoadCombinations } from "./ServiceLoadCombinations";

export class LoadCombinations_Functions {
    allLoadCombos: LoadCombo[];
    usedLoadCombs: LoadCombo[];
    factoredLoads: number[][];

    includeLRFDCombos: boolean = false;
    LRFDLoadCombos: LRFDLoadCombinations;
    includeASDCombos: boolean = false;
    ASDLoadCombos: ASDLoadCombinations;
    includeServiceCombos: boolean = false;
    ServiceCombos: ServiceLoadCombinations;

    constructor(LRFDCombos: boolean, ASDCombos: boolean, ServiceCombos: boolean) {
        this.allLoadCombos = [];
        this.usedLoadCombs = [];
        this.factoredLoads = [];
        this.includeLRFDCombos = LRFDCombos;
        this.includeASDCombos = ASDCombos;
        this.includeServiceCombos = ServiceCombos;
        this.BuildAllCombos();
    }


    BuildComboTable(loadCases: string[][], magnitudes: number[][]): any[][] {
        let returnArray: any[][] = [];    
        if (this.IsValidInput(loadCases, magnitudes)) {
            this.BuildUsedCombs(loadCases);
            this.BuildFactoredLoads(loadCases, magnitudes);
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
                returnArray[i][j + 2] = this.factoredLoads[i][j];
            }
        }
        return returnArray;
    }
    
    BuildFactoredLoads(loadCases: string[][], magnitudes: number[][]) {
        let nRows: number = this.usedLoadCombs.length;
        let nCols: number = magnitudes[0].length;
        let nTerms: number = 0;
        let thisTerm: LoadComboTerm = new LoadComboTerm();
        let loadCaseIndex: number;
        let unFactoredLoad: number;
        let factoredLoad: number;

        for (let i = 0; i < nRows; i++) {
            this.factoredLoads[i] = [];
            nTerms = this.usedLoadCombs[i].Terms.length;
            for (let j = 0; j < nTerms; j++) {
                thisTerm = this.usedLoadCombs[i].Terms[j];
                loadCaseIndex = this.LoadCaseIndex(thisTerm.loadCase, loadCases);
                if (loadCaseIndex >= 0) {
                    for (let k = 0; k < nCols; k++) {
                        unFactoredLoad = this.UnfactoredLoad(loadCaseIndex, k, magnitudes);
                        factoredLoad = unFactoredLoad * thisTerm.factor;
                        if (this.factoredLoads[i][k] == null) {
                            this.factoredLoads[i][k] = factoredLoad;
                        } else {
                            this.factoredLoads[i][k] = this.factoredLoads[i][k] + factoredLoad;
                        }
                    }
                }
            }
        }
    }

    UnfactoredLoad(rowIndex: number, colIndex: number, magnitudes: number[][]):number {
        let unfactoredLoad: number;
        unfactoredLoad = magnitudes[rowIndex][colIndex];
        return unfactoredLoad
    }

    LoadCaseIndex(loadCase: string, loadCases: string[][]): number {
        let index: number = 0;
        for (let i = 0; i < loadCases.length; i++) {
            if (loadCases[i][0] == loadCase) {
                index = i;
                return index
            }
        }
        // No match
        index = -1;
        return index
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
    }
}