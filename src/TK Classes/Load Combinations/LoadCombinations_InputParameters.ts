import { InputParameter } from "../../Builder Classes/InputParameter";

export class LoadCombinations_InputParams {
    loadCasesStart: InputParameter;
    loadCasesEnd: InputParameter;
    loadsStart: InputParameter;
    loadsEnd: InputParameter;
    
    constructor() {
        this.loadCasesStart = new InputParameter();
            
        this.loadCasesEnd = new InputParameter();
            
        this.loadsStart = new InputParameter();
            
        this.loadsEnd = new InputParameter();
            
    }
}