
export class LoadCase {
    isValidLoadCase: boolean;
    validLoadCases: string[];

    constructor() {
        this.validLoadCases = [
            'D',
            'L',
            'Lr',
            'S',
            'R',
            'W',
            'W+',
            'W-',
            'H',
            'Eh',
            'Ev',
            'Emh'
        ]
    }

    IsValid(lc: string) {
        this.isValidLoadCase = false;
        for (let i = 0; i < this.validLoadCases.length; i++) {
            if (lc == this.validLoadCases[i]) {
                this.isValidLoadCase = true;
                break;
            }
        }
    }
}