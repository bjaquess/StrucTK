// eslint-disable-next-line no-unused-vars
import { InputParameter } from "../../Builder Classes/InputParameter";

export function TemplateInputParamFunction(): {[index: string]: {param: InputParameter}} {
    let params = {};
    
    let ip = new InputParameter();    
    ip.UnitsCell.contents = "in";
    params['b'] = { ip };

    ip = new InputParameter();
    ip.UnitsCell.contents = "in";
    params['d'] = { ip };
    
    return params;
}

export class Template_InputParams {
    b: InputParameter;
    d: InputParameter;

    constructor() {
        this.b = new InputParameter();
        this.d = new InputParameter();
        this.b.UnitsCell.contents = 'in';
        this.d.UnitsCell.contents = 'in';
    }
}