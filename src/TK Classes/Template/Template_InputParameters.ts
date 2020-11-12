import { InputParameter } from "../../Builder Classes/InputParameter";
import { NewInputParameter } from "../../Builder Functions/NewInputParameter";

export function TemplateInputParameters(): {[index: string]: {param: InputParameter}} {
    let params = {};
    params['b'] = { InputParameter: NewInputParameter() }
    params['d'] = { InputParameter: NewInputParameter() }
    
    return params;
}