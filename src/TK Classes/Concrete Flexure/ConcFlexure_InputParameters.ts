import { InputParameter } from "../../Builder Classes/InputParameter";

export class ConcFlexure_InputParams {
    b: InputParameter;
    d: InputParameter;
    fy: InputParameter;
    fc: InputParameter;
    nBars: InputParameter;
    barSize: InputParameter;

    loadCasesStart: InputParameter;
    loadCasesEnd: InputParameter;
    loadsStart: InputParameter;
    loadsEnd: InputParameter;

    constructor() {
        this.b = new InputParameter();
            this.b.UnitsCell.contents = 'in';
        this.d = new InputParameter();
            this.d.UnitsCell.contents = 'in';
        this.fy = new InputParameter();
            this.fy.UnitsCell.contents = 'ksi';
        this.fc = new InputParameter();
            this.fc.UnitsCell.contents = 'ksi';
        this.nBars = new InputParameter();
        this.barSize = new InputParameter();

        this.loadCasesStart = new InputParameter();
        this.loadCasesEnd = new InputParameter();
        this.loadsStart = new InputParameter();
        this.loadsEnd = new InputParameter();
    }
}