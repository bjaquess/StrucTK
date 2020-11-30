// eslint-disable-next-line no-unused-vars
import { LoadCombo, LoadComboType } from "./LoadCombination";

export class LoadCombinations_Builder {
    AllCombinations: LoadCombo[];
    LiveLoadInGarageOrPublicAssemblyOrGreaterThan100: boolean = false;
    

    constructor() {
        this.AllCombinations = [];
    }

    AddCombination(label: string, terms: [number, string][]) {
        let LC = new LoadCombo();
            LC.label = label;
            for (let i = 0; i < terms.length; i++) {
                let factor = terms[i][0];
                let loadcase = terms[i][1];
                LC.AddTerm(factor, loadcase);
            }
        this.AllCombinations.push(LC)
    }

    AssignComboType(type: LoadComboType) {
        for(let i = 0; i < this.AllCombinations.length; i++) {
            this.AllCombinations[i].type = type;
        }
    }
}