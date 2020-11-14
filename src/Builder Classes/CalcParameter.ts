import { CheckCell, EquationCell, ExplanatoryCell, IntermediateResultsCell, FinalResultsCell, InputCell, LabelCell, UnitsCell, ReferenceCell, TitleCell} from './Cell';

export class CalcParameter {
    //BlankCell : BlankCell;
    CheckCell = new CheckCell();
    EquationCell = new EquationCell();
    ExplanatoryCell = new ExplanatoryCell();
    InputCell = new InputCell();
    LabelCell = new LabelCell();
    FinalResultsCell = new FinalResultsCell();
    IntermediateResultsCell = new IntermediateResultsCell();
    UnitsCell = new UnitsCell();
    TitleCell = new TitleCell();
    ReferenceCell = new ReferenceCell();
    
    constructor() {}
}
