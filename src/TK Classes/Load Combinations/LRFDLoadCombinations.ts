import { LoadCombinations_Builder } from "./LoadCombinations_Builder";
import { LoadComboType } from "./LoadCombination";

export class LRFDLoadCombinations extends LoadCombinations_Builder {
    AllCombsIncludeD: boolean = true;
    
    constructor() {
        super();

        this.AddCombination('1.4D', [[1.4, 'D']]);

        this.AddCombination('1.2D + 1.6L', [[1.2, 'D'],[1.6, 'L']]);
        this.AddCombination('1.2D + 1.6L + 0.5Lr', [[1.2, 'D'],[1.6,'L'],[0.5,'Lr']]);
        this.AddCombination('1.2D + 1.6L + 0.5S', [[1.2, 'D'],[1.6,'L'],[0.5,'S']]);
        this.AddCombination('1.2D + 1.6L + 0.5R', [[1.2, 'D'],[1.6,'L'],[0.5,'R']]);
        
        this.AddCombination('1.2D + 1.6Lr', [[1.2, 'D'],[1.6,'Lr']]);
        if (this.LiveLoadInGarageOrPublicAssemblyOrGreaterThan100) {
            this.AddCombination('1.2D + 1.6Lr + L', [[1.2, 'D'],[1.6,'Lr'],[1,'L']]);
        }
        else {
            this.AddCombination('1.2D + 1.6Lr + 0.5L', [[1.2, 'D'],[1.6,'Lr'],[0.5,'L']]);
        }
        this.AddCombination('1.2D + 1.6Lr + 0.5W', [[1.2, 'D'],[1.6,'Lr'],[0.5,'W']]);
        this.AddCombination('1.2D + 1.6Lr - 0.5W', [[1.2, 'D'],[1.6,'Lr'],[-0.5,'W']]);
        this.AddCombination('1.2D + 1.6Lr + 0.5(W+)', [[1.2, 'D'],[1.6,'Lr'],[0.5,'W+']]);
        this.AddCombination('1.2D + 1.6Lr + 0.5(W-)', [[1.2, 'D'],[1.6,'Lr'],[0.5,'W-']]);
        this.AddCombination('1.2D + 1.6S', [[1.2, 'D'],[1.6,'S']]);
        if (this.LiveLoadInGarageOrPublicAssemblyOrGreaterThan100) {
            this.AddCombination('1.2D + 1.6S + L', [[1.2, 'D'],[1.6,'S'],[1,'L']]);
        }
        else {
            this.AddCombination('1.2D + 1.6S + 0.5L', [[1.2, 'D'],[1.6,'S'],[0.5,'L']]);
        }
        this.AddCombination('1.2D + 1.6S + 0.5W', [[1.2, 'D'],[1.6,'S'],[0.5,'W']]);
        this.AddCombination('1.2D + 1.6S - 0.5W', [[1.2, 'D'],[1.6,'S'],[-0.5,'W']]);
        this.AddCombination('1.2D + 1.6S + 0.5(W+)', [[1.2, 'D'],[1.6,'S'],[0.5,'W+']]);
        this.AddCombination('1.2D + 1.6S + 0.5(W-)', [[1.2, 'D'],[1.6,'S'],[0.5,'W-']]);
        this.AddCombination('1.2D + 1.6R', [[1.2, 'D'],[1.6,'R']]);
        if (this.LiveLoadInGarageOrPublicAssemblyOrGreaterThan100) {
            this.AddCombination('1.2D + 1.6R + L', [[1.2, 'D'],[1.6,'R'],[1,'L']]);
        }
        else {
            this.AddCombination('1.2D + 1.6R + 0.5L', [[1.2, 'D'],[1.6,'R'],[0.5,'L']]);
        }
        this.AddCombination('1.2D + 1.6R + 0.5W', [[1.2, 'D'],[1.6,'R'],[0.5,'W']]);
        this.AddCombination('1.2D + 1.6R - 0.5W', [[1.2, 'D'],[1.6,'R'],[-0.5,'W']]);
        this.AddCombination('1.2D + 1.6R + 0.5(W+)', [[1.2, 'D'],[1.6,'R'],[0.5,'W+']]);
        this.AddCombination('1.2D + 1.6R + 0.5(W-)', [[1.2, 'D'],[1.6,'R'],[0.5,'W-']]);
        
        if (this.LiveLoadInGarageOrPublicAssemblyOrGreaterThan100) {
            this.AddCombination('1.2D + 1.0W + L', [[1.2, 'D'],[1.0,'W'],[1,'L']]);
            this.AddCombination('1.2D + 1.0W + L + 0.5Lr', [[1.2, 'D'],[1.0,'W'],[1,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.0W + L + 0.5S', [[1.2, 'D'],[1.0,'W'],[1,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.0W + L + 0.5R', [[1.2, 'D'],[1.0,'W'],[1,'L'],[0.5,'R']]);
            this.AddCombination('1.2D - 1.0W + L', [[1.2, 'D'],[-1.0,'W'],[1,'L']]);
            this.AddCombination('1.2D - 1.0W + L + 0.5Lr', [[1.2, 'D'],[-1.0,'W'],[1,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D - 1.0W + L + 0.5S', [[1.2, 'D'],[-1.0,'W'],[1,'L'],[0.5,'S']]);
            this.AddCombination('1.2D - 1.0W + L + 0.5R', [[1.2, 'D'],[-1.0,'W'],[1,'L'],[0.5,'R']]);
            this.AddCombination('1.2D + 1.0(W+) + L', [[1.2, 'D'],[1.0,'W+'],[1,'L']]);
            this.AddCombination('1.2D + 1.0(W+) + L + 0.5Lr', [[1.2, 'D'],[1.0,'W+'],[1,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.0(W+) + L + 0.5S', [[1.2, 'D'],[1.0,'W+'],[1,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.0(W+) + L + 0.5R', [[1.2, 'D'],[1.0,'W+'],[1,'L'],[0.5,'R']]);
            this.AddCombination('1.2D + 1.0(W-) + L', [[1.2, 'D'],[1.0,'W-'],[1,'L']]);
            this.AddCombination('1.2D + 1.0(W-) + L + 0.5Lr', [[1.2, 'D'],[1.0,'W-'],[1,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.0(W-) + L + 0.5S', [[1.2, 'D'],[1.0,'W-'],[1,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.0(W-) + L + 0.5R', [[1.2, 'D'],[1.0,'W-'],[1,'L'],[0.5,'R']]);
        }
        else {
            this.AddCombination('1.2D + 1.0W + 0.5L', [[1.2, 'D'],[1.0,'W'],[0.5,'L']]);
            this.AddCombination('1.2D + 1.0W + 0.5L + 0.5Lr', [[1.2, 'D'],[1.0,'W'],[0.5,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.0W + 0.5L + 0.5S', [[1.2, 'D'],[1.0,'W'],[0.5,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.0W + 0.5L + 0.5R', [[1.2, 'D'],[1.0,'W'],[0.5,'L'],[0.5,'R']]);
            this.AddCombination('1.2D - 1.0W + 0.5L', [[1.2, 'D'],[-1.0,'W'],[0.5,'L']]);
            this.AddCombination('1.2D - 1.0W + 0.5L + 0.5Lr', [[1.2, 'D'],[-1.0,'W'],[0.5,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D - 1.0W + 0.5L + 0.5S', [[1.2, 'D'],[-1.0,'W'],[0.5,'L'],[0.5,'S']]);
            this.AddCombination('1.2D - 1.0W + 0.5L + 0.5R', [[1.2, 'D'],[-1.0,'W'],[0.5,'L'],[0.5,'R']]);
            this.AddCombination('1.2D + 1.0(W+) + 0.5L', [[1.2, 'D'],[1.0,'W+'],[0.5,'L']]);
            this.AddCombination('1.2D + 1.0(W+) + 0.5L + 0.5Lr', [[1.2, 'D'],[1.0,'W+'],[0.5,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.0(W+) + 0.5L + 0.5S', [[1.2, 'D'],[1.0,'W+'],[0.5,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.0(W+) + 0.5L + 0.5R', [[1.2, 'D'],[1.0,'W+'],[0.5,'L'],[0.5,'R']]);
            this.AddCombination('1.2D + 1.0(W-) + 0.5L', [[1.2, 'D'],[1.0,'W-'],[0.5,'L']]);
            this.AddCombination('1.2D + 1.0(W-) + 0.5L + 0.5Lr', [[1.2, 'D'],[1.0,'W-'],[0.5,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.0(W-) + 0.5L + 0.5S', [[1.2, 'D'],[1.0,'W-'],[0.5,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.0(W-) + 0.5L + 0.5R', [[1.2, 'D'],[1.0,'W-'],[0.5,'L'],[0.5,'R']]);
        }

        this.AddCombination('0.9D + 1.0W', [[0.9,'D'],[1,'W']]);
        this.AddCombination('0.9D - 1.0W', [[0.9,'D'],[-1,'W']]);
        this.AddCombination('0.9D + 1.0(W+)', [[0.9,'D'],[1,'W+']]);
        this.AddCombination('0.9D + 1.0(W-)', [[0.9,'D'],[1,'W-']]);
        
        this.AddCombination('1.2D + Ev + Eh', [[1.2,'D'],[1,'Ev'],[1,'Eh']]);
        this.AddCombination('1.2D + Ev - Eh', [[1.2,'D'],[1,'Ev'],[-1,'Eh']]);
        this.AddCombination('1.2D + Ev + Eh + 0.2S', [[1.2,'D'],[1,'Ev'],[1,'Eh'],[0.2,'S']]);
        this.AddCombination('1.2D + Ev - Eh + 0.2S', [[1.2,'D'],[1,'Ev'],[-1,'Eh'],[0.2,'S']]);

        if (this.LiveLoadInGarageOrPublicAssemblyOrGreaterThan100) {
            this.AddCombination('1.2D + Ev + Eh + L', [[1.2,'D'],[1,'Ev'],[1,'Eh'],[1,'L']]);
            this.AddCombination('1.2D + Ev - Eh + L', [[1.2,'D'],[1,'Ev'],[-1,'Eh'],[1,'L']]);
            this.AddCombination('1.2D + Ev + Eh + L + 0.2S', [[1.2,'D'],[1,'Ev'],[1,'Eh'],[1,'L'],[0.2,'S']]);
            this.AddCombination('1.2D + Ev - Eh + L + 0.2S', [[1.2,'D'],[1,'Ev'],[-1,'Eh'],[1,'L'],[0.2,'S']]);
        }
        else {
            this.AddCombination('1.2D + Ev + Eh + 0.5L', [[1.2,'D'],[1,'Ev'],[1,'Eh'],[0.5,'L']]);
            this.AddCombination('1.2D + Ev - Eh + 0.5L', [[1.2,'D'],[1,'Ev'],[-1,'Eh'],[0.5,'L']]);
            this.AddCombination('1.2D + Ev + Eh + 0.5L + 0.2S', [[1.2,'D'],[1,'Ev'],[1,'Eh'],[0.5,'L'],[0.2,'S']]);
            this.AddCombination('1.2D + Ev - Eh + 0.5L + 0.2S', [[1.2,'D'],[1,'Ev'],[-1,'Eh'],[0.5,'L'],[0.2,'S']]);
        }

        this.AddCombination('0.9D - Ev + Eh', [[0.9,'D'],[-1,'Ev'],[1,'Eh']]);
        this.AddCombination('0.9D - Ev - Eh', [[0.9,'D'],[-1,'Ev'],[-1,'Eh']]);
        
        this.AddCombination('1.2D + Ev + Emh', [[1.2,'D'],[1,'Ev'],[1,'Emh']]);
        this.AddCombination('1.2D + Ev - Emh', [[1.2,'D'],[1,'Ev'],[-1,'Emh']]);
        this.AddCombination('1.2D + Ev + Emh + 0.2S', [[1.2,'D'],[1,'Ev'],[1,'Emh'],[0.2,'S']]);
        this.AddCombination('1.2D + Ev - Emh + 0.2S', [[1.2,'D'],[1,'Ev'],[-1,'Emh'],[0.2,'S']]);

        if (this.LiveLoadInGarageOrPublicAssemblyOrGreaterThan100) {
            this.AddCombination('1.2D + Ev + Emh + L', [[1.2,'D'],[1,'Ev'],[1,'Emh'],[1,'L']]);
            this.AddCombination('1.2D + Ev - Emh + L', [[1.2,'D'],[1,'Ev'],[-1,'Emh'],[1,'L']]);
            this.AddCombination('1.2D + Ev + Emh + L + 0.2S', [[1.2,'D'],[1,'Ev'],[1,'Emh'],[1,'L'],[0.2,'S']]);
            this.AddCombination('1.2D + Ev - Emh + L + 0.2S', [[1.2,'D'],[1,'Ev'],[-1,'Emh'],[1,'L'],[0.2,'S']]);
        }
        else {
            this.AddCombination('1.2D + Ev + Emh + 0.5L', [[1.2,'D'],[1,'Ev'],[1,'Emh'],[0.5,'L']]);
            this.AddCombination('1.2D + Ev - Emh + 0.5L', [[1.2,'D'],[1,'Ev'],[-1,'Emh'],[0.5,'L']]);
            this.AddCombination('1.2D + Ev + Emh + 0.5L + 0.2S', [[1.2,'D'],[1,'Ev'],[1,'Emh'],[0.5,'L'],[0.2,'S']]);
            this.AddCombination('1.2D + Ev - Emh + 0.5L + 0.2S', [[1.2,'D'],[1,'Ev'],[-1,'Emh'],[0.5,'L'],[0.2,'S']]);
        }

        this.AddCombination('0.9D - Ev + Emh', [[0.9,'D'],[-1,'Ev'],[1,'Emh']]);
        this.AddCombination('0.9D - Ev - Emh', [[0.9,'D'],[-1,'Ev'],[-1,'Emh']]);

        // ***** Soil pressure load combinations //
        this.AddCombination('1.2D + 1.6H + 1.6L', [[1.2, 'D'],[1.6,'H'],[1.6, 'L']]);
        this.AddCombination('1.2D + 1.6H + 1.6L + 0.5Lr', [[1.2, 'D'],[1.6,'H'],[1.6,'L'],[0.5,'Lr']]);
        this.AddCombination('1.2D + 1.6H + 1.6L + 0.5S', [[1.2, 'D'],[1.6,'H'],[1.6,'L'],[0.5,'S']]);
        this.AddCombination('1.2D + 1.6H + 1.6L + 0.5R', [[1.2, 'D'],[1.6,'H'],[1.6,'L'],[0.5,'R']]);
        
        this.AddCombination('1.2D + 1.6H + 1.6Lr', [[1.2, 'D'],[1.6,'H'],[1.6,'Lr']]);
        if (this.LiveLoadInGarageOrPublicAssemblyOrGreaterThan100) {
            this.AddCombination('1.2D + 1.6H + 1.6Lr + L', [[1.2, 'D'],[1.6,'H'],[1.6,'Lr'],[1,'L']]);
        }
        else {
            this.AddCombination('1.2D + 1.6H + 1.6Lr + 0.5L', [[1.2, 'D'],[1.6,'H'],[1.6,'Lr'],[0.5,'L']]);
        }
        this.AddCombination('1.2D + 1.6H + 1.6Lr + 0.5W', [[1.2, 'D'],[1.6,'H'],[1.6,'Lr'],[0.5,'W']]);
        this.AddCombination('1.2D + 1.6H + 1.6Lr - 0.5W', [[1.2, 'D'],[1.6,'H'],[1.6,'Lr'],[-0.5,'W']]);
        this.AddCombination('1.2D + 1.6H + 1.6Lr + 0.5(W+)', [[1.2, 'D'],[1.6,'H'],[1.6,'Lr'],[0.5,'W+']]);
        this.AddCombination('1.2D + 1.6H + 1.6Lr + 0.5(W-)', [[1.2, 'D'],[1.6,'H'],[1.6,'Lr'],[0.5,'W-']]);
        this.AddCombination('1.2D + 1.6H + 1.6S', [[1.2, 'D'],[1.6,'H'],[1.6,'S']]);
        if (this.LiveLoadInGarageOrPublicAssemblyOrGreaterThan100) {
            this.AddCombination('1.2D + 1.6H + 1.6S + L', [[1.2, 'D'],[1.6,'H'],[1.6,'S'],[1,'L']]);
        }
        else {
            this.AddCombination('1.2D + 1.6H + 1.6S + 0.5L', [[1.2, 'D'],[1.6,'H'],[1.6,'S'],[0.5,'L']]);
        }
        this.AddCombination('1.2D + 1.6H + 1.6S + 0.5W', [[1.2, 'D'],[1.6,'H'],[1.6,'S'],[0.5,'W']]);
        this.AddCombination('1.2D + 1.6H + 1.6S - 0.5W', [[1.2, 'D'],[1.6,'H'],[1.6,'S'],[-0.5,'W']]);
        this.AddCombination('1.2D + 1.6H + 1.6S + 0.5(W+)', [[1.2, 'D'],[1.6,'H'],[1.6,'S'],[0.5,'W+']]);
        this.AddCombination('1.2D + 1.6H + 1.6S + 0.5(W-)', [[1.2, 'D'],[1.6,'H'],[1.6,'S'],[0.5,'W-']]);
        this.AddCombination('1.2D + 1.6H + 1.6R', [[1.2, 'D'],[1.6,'H'],[1.6,'R']]);
        if (this.LiveLoadInGarageOrPublicAssemblyOrGreaterThan100) {
            this.AddCombination('1.2D + 1.6H + 1.6R + L', [[1.2, 'D'],[1.6,'H'],[1.6,'R'],[1,'L']]);
        }
        else {
            this.AddCombination('1.2D + 1.6H + 1.6R + 0.5L', [[1.2, 'D'],[1.6,'H'],[1.6,'R'],[0.5,'L']]);
        }
        this.AddCombination('1.2D + 1.6H + 1.6R + 0.5W', [[1.2, 'D'],[1.6,'H'],[1.6,'R'],[0.5,'W']]);
        this.AddCombination('1.2D + 1.6H + 1.6R - 0.5W', [[1.2, 'D'],[1.6,'H'],[1.6,'R'],[-0.5,'W']]);
        this.AddCombination('1.2D + 1.6H + 1.6R + 0.5(W+)', [[1.2, 'D'],[1.6,'H'],[1.6,'R'],[0.5,'W+']]);
        this.AddCombination('1.2D + 1.6H + 1.6R + 0.5(W-)', [[1.2, 'D'],[1.6,'H'],[1.6,'R'],[0.5,'W-']]);
        
        if (this.LiveLoadInGarageOrPublicAssemblyOrGreaterThan100) {
            this.AddCombination('1.2D + 1.6H + 1.0W + L', [[1.2, 'D'],[1.6,'H'],[1.0,'W'],[1,'L']]);
            this.AddCombination('1.2D + 1.6H + 1.0W + L + 0.5Lr', [[1.2, 'D'],[1.6,'H'],[1.0,'W'],[1,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.6H + 1.0W + L + 0.5S', [[1.2, 'D'],[1.6,'H'],[1.0,'W'],[1,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.6H + 1.0W + L + 0.5R', [[1.2, 'D'],[1.6,'H'],[1.0,'W'],[1,'L'],[0.5,'R']]);
            this.AddCombination('1.2D + 1.6H - 1.0W + L', [[1.2, 'D'],[1.6,'H'],[-1.0,'W'],[1,'L']]);
            this.AddCombination('1.2D + 1.6H - 1.0W + L + 0.5Lr', [[1.2, 'D'],[1.6,'H'],[-1.0,'W'],[1,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.6H - 1.0W + L + 0.5S', [[1.2, 'D'],[1.6,'H'],[-1.0,'W'],[1,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.6H - 1.0W + L + 0.5R', [[1.2, 'D'],[1.6,'H'],[-1.0,'W'],[1,'L'],[0.5,'R']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W+) + L', [[1.2, 'D'],[1.6,'H'],[1.0,'W+'],[1,'L']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W+) + L + 0.5Lr', [[1.2, 'D'],[1.6,'H'],[1.0,'W+'],[1,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W+) + L + 0.5S', [[1.2, 'D'],[1.6,'H'],[1.0,'W+'],[1,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W+) + L + 0.5R', [[1.2, 'D'],[1.6,'H'],[1.0,'W+'],[1,'L'],[0.5,'R']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W-) + L', [[1.2, 'D'],[1.6,'H'],[1.0,'W-'],[1,'L']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W-) + L + 0.5Lr', [[1.2, 'D'],[1.6,'H'],[1.0,'W-'],[1,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W-) + L + 0.5S', [[1.2, 'D'],[1.6,'H'],[1.0,'W-'],[1,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W-) + L + 0.5R', [[1.2, 'D'],[1.6,'H'],[1.0,'W-'],[1,'L'],[0.5,'R']]);
        }
        else {
            this.AddCombination('1.2D + 1.6H + 1.0W + 0.5L', [[1.2, 'D'],[1.6,'H'],[1.0,'W'],[0.5,'L']]);
            this.AddCombination('1.2D + 1.6H + 1.0W + 0.5L + 0.5Lr', [[1.2, 'D'],[1.6,'H'],[1.0,'W'],[0.5,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.6H + 1.0W + 0.5L + 0.5S', [[1.2, 'D'],[1.6,'H'],[1.0,'W'],[0.5,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.6H + 1.0W + 0.5L + 0.5R', [[1.2, 'D'],[1.6,'H'],[1.0,'W'],[0.5,'L'],[0.5,'R']]);
            this.AddCombination('1.2D + 1.6H - 1.0W + 0.5L', [[1.2, 'D'],[1.6,'H'],[-1.0,'W'],[0.5,'L']]);
            this.AddCombination('1.2D + 1.6H - 1.0W + 0.5L + 0.5Lr', [[1.2, 'D'],[1.6,'H'],[-1.0,'W'],[0.5,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.6H - 1.0W + 0.5L + 0.5S', [[1.2, 'D'],[1.6,'H'],[-1.0,'W'],[0.5,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.6H - 1.0W + 0.5L + 0.5R', [[1.2, 'D'],[1.6,'H'],[-1.0,'W'],[0.5,'L'],[0.5,'R']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W+) + 0.5L', [[1.2, 'D'],[1.6,'H'],[1.0,'W+'],[0.5,'L']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W+) + 0.5L + 0.5Lr', [[1.2, 'D'],[1.6,'H'],[1.0,'W+'],[0.5,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W+) + 0.5L + 0.5S', [[1.2, 'D'],[1.6,'H'],[1.0,'W+'],[0.5,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W+) + 0.5L + 0.5R', [[1.2, 'D'],[1.6,'H'],[1.0,'W+'],[0.5,'L'],[0.5,'R']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W-) + 0.5L', [[1.2, 'D'],[1.6,'H'],[1.0,'W-'],[0.5,'L']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W-) + 0.5L + 0.5Lr', [[1.2, 'D'],[1.6,'H'],[1.0,'W-'],[0.5,'L'],[0.5,'Lr']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W-) + 0.5L + 0.5S', [[1.2, 'D'],[1.6,'H'],[1.0,'W-'],[0.5,'L'],[0.5,'S']]);
            this.AddCombination('1.2D + 1.6H + 1.0(W-) + 0.5L + 0.5R', [[1.2, 'D'],[1.6,'H'],[1.0,'W-'],[0.5,'L'],[0.5,'R']]);
        }

        this.AddCombination('0.9D + 0.9H + 1.0W', [[0.9,'D'],[0.9,'H'],[1,'W']]);
        this.AddCombination('0.9D + 0.9H - 1.0W', [[0.9,'D'],[0.9,'H'],[-1,'W']]);
        this.AddCombination('0.9D + 0.9H + 1.0(W+)', [[0.9,'D'],[0.9,'H'],[1,'W+']]);
        this.AddCombination('0.9D + 0.9H + 1.0(W-)', [[0.9,'D'],[0.9,'H'],[1,'W-']]);
        
        this.AddCombination('1.2D + 1.6H + Ev + Eh', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[1,'Eh']]);
        this.AddCombination('1.2D + 1.6H + Ev - Eh', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[-1,'Eh']]);
        this.AddCombination('1.2D + 1.6H + Ev + Eh + 0.2S', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[1,'Eh'],[0.2,'S']]);
        this.AddCombination('1.2D + 1.6H + Ev - Eh + 0.2S', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[-1,'Eh'],[0.2,'S']]);

        if (this.LiveLoadInGarageOrPublicAssemblyOrGreaterThan100) {
            this.AddCombination('1.2D + 1.6H + Ev + Eh + L', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[1,'Eh'],[1,'L']]);
            this.AddCombination('1.2D + 1.6H + Ev - Eh + L', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[-1,'Eh'],[1,'L']]);
            this.AddCombination('1.2D + 1.6H + Ev + Eh + L + 0.2S', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[1,'Eh'],[1,'L'],[0.2,'S']]);
            this.AddCombination('1.2D + 1.6H + Ev - Eh + L + 0.2S', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[-1,'Eh'],[1,'L'],[0.2,'S']]);
        }
        else {
            this.AddCombination('1.2D + 1.6H + Ev + Eh + 0.5L', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[1,'Eh'],[0.5,'L']]);
            this.AddCombination('1.2D + 1.6H + Ev - Eh + 0.5L', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[-1,'Eh'],[0.5,'L']]);
            this.AddCombination('1.2D + 1.6H + Ev + Eh + 0.5L + 0.2S', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[1,'Eh'],[0.5,'L'],[0.2,'S']]);
            this.AddCombination('1.2D + 1.6H + Ev - Eh + 0.5L + 0.2S', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[-1,'Eh'],[0.5,'L'],[0.2,'S']]);
        }

        this.AddCombination('0.9D + 0.9H - Ev + Eh', [[0.9,'D'],[0.9,'H'],[-1,'Ev'],[1,'Eh']]);
        this.AddCombination('0.9D + 0.9H - Ev - Eh', [[0.9,'D'],[0.9,'H'],[-1,'Ev'],[-1,'Eh']]);
        
        this.AddCombination('1.2D + 1.6H + Ev + Emh', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[1,'Emh']]);
        this.AddCombination('1.2D + 1.6H + Ev - Emh', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[-1,'Emh']]);
        this.AddCombination('1.2D + 1.6H + Ev + Emh + 0.2S', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[1,'Emh'],[0.2,'S']]);
        this.AddCombination('1.2D + 1.6H + Ev - Emh + 0.2S', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[-1,'Emh'],[0.2,'S']]);

        if (this.LiveLoadInGarageOrPublicAssemblyOrGreaterThan100) {
            this.AddCombination('1.2D + 1.6H + Ev + Emh + L', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[1,'Emh'],[1,'L']]);
            this.AddCombination('1.2D + 1.6H + Ev - Emh + L', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[-1,'Emh'],[1,'L']]);
            this.AddCombination('1.2D + 1.6H + Ev + Emh + L + 0.2S', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[1,'Emh'],[1,'L'],[0.2,'S']]);
            this.AddCombination('1.2D + 1.6H + Ev - Emh + L + 0.2S', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[-1,'Emh'],[1,'L'],[0.2,'S']]);
        }
        else {
            this.AddCombination('1.2D + 1.6H + Ev + Emh + 0.5L', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[1,'Emh'],[0.5,'L']]);
            this.AddCombination('1.2D + 1.6H + Ev - Emh + 0.5L', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[-1,'Emh'],[0.5,'L']]);
            this.AddCombination('1.2D + 1.6H + Ev + Emh + 0.5L + 0.2S', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[1,'Emh'],[0.5,'L'],[0.2,'S']]);
            this.AddCombination('1.2D + 1.6H + Ev - Emh + 0.5L + 0.2S', [[1.2,'D'],[1.6,'H'],[1,'Ev'],[-1,'Emh'],[0.5,'L'],[0.2,'S']]);
        }

        this.AddCombination('0.9D + 0.9H - Ev + Emh', [[0.9,'D'],[0.9,'H'],[-1,'Ev'],[1,'Emh']]);
        this.AddCombination('0.9D + 0.9H - Ev - Emh', [[0.9,'D'],[0.9,'H'],[-1,'Ev'],[-1,'Emh']]);

        // **** Assign type 'LRFD' ****
        this.AssignComboType(LoadComboType.LRFD);
    }

    
}