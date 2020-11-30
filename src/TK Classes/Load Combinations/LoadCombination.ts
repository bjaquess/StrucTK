/* eslint-disable no-unused-vars */
export enum LoadComboType {
    LRFD,
    ASD,
    Service
}

export class LoadCombo {
    label: string;
    num: number;
    type: LoadComboType;
    isUsed: boolean;
    isEarthPressureComb: boolean;
    Terms: LoadComboTerm[];

    constructor() {
        this.Terms = [];
    }
    AddTerm(factor: number, loadCase: string) {
        let newTerm = new LoadComboTerm();
        newTerm.factor = factor;
        newTerm.loadCase = loadCase;
        this.Terms.push(newTerm)
    }
}

export class LoadComboTerm {
    loadCase: string;
    factor: number;
}