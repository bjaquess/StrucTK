import {Heading, Text, TextC, TextBU, TextR, TextREq, Input, InputDropDown, Output, OutputWithBorder, Empty, Hint, Formula, MergeRightBold} from "../../cells/cells";
import {Component} from "../component";
import {AddNewSheet} from "../../Builder Functions/AddNewSheet";

export async function execute(context) {
    let component = new Component();

    // new sheet
    await AddNewSheet('WF Steel Beam Design');
    await component.setPosition(context);

    // turn off screen updating
    context.application.suspendScreenUpdatingUntilNextSync();

    // heading
    component.printRow(Heading("Steel WF Beam Design"));
    component.printRows(
        [Hint("[Ref. ASCE7, AISC 360]"), Empty(), Empty(), Empty(), Empty(), TextREq('Beam Label:'), Input('Beam Label')]
    );
    component.position.row++;

    // Geometry input
    component.printRow(TextBU('Geometry:'));
    component.printRows(
        [Empty(), TextREq('Span'), Input('Span'), Text('ft'), Text('Flange Braces at Supports and at:')],
        [Empty(), TextREq('Cont. TF Bracing'), InputDropDown('TFBracing', 'Yes, No'), Empty(), TextREq('x_Top'), Input('Lb_Top_start'), Input('null'), Input('null'), Input('null'),Input('null'), Text('ft')],
        [Empty(), TextREq('Cont. BF Bracing'), InputDropDown('BFBracing', 'Yes, No'), Empty(), TextREq('x_Bott'), Input('null'), Input('null'), Input('null'), Input('null'),Input('Lb_Bott_end'), Text('ft')],
    );
    component.position.row++;
    
    // Material props
    component.printRows(
        [TextBU('Material Properties:')],
        [Empty(), TextREq('Fy'), Input('Fy'), Text('ksi')],
        [Empty(), TextREq('E'), Input('E'), Text('ksi')]
    );
    component.position.row++;

    // Deflection Criteria
    component.printRows(
        [TextBU('Deflection Limits')],
        [Empty(), TextC('LC'), TextC('Limit')],
        [Empty(), Input('LC1'), Input('Limit1'), Text(' ='), Text('in')],
        [Empty(), Input('LC2'), Input('Limit2'), Text(' ='), Text('in')]
    );
    component.position.row++;

    component.printRow(TextBU('Loads:'));
    component.printRow(Empty(), MergeRightBold('Point Loads', 3), Empty(), Empty(), Empty(), MergeRightBold('Distributed Loads', 5));
    component.printRow(Empty(), TextC('Load Case'), TextC('P (k)'), TextC('a (ft'), Empty(), TextC('Load Case'), TextC('w0 (klf)'), TextC('w1 (klf)'), TextC('a (ft'), TextC('b (ft)'));
    
    let numLoads: number = 10;
    let loadsRow1: number = component.position.row;
    let loadsRow2: number = loadsRow1 + numLoads - 1;

    for (let i = 0; i < numLoads; i++) {
        component.printRow(Empty(), Input('null'), Input('null'), Input('null'), Empty(), Input('null'), Input('null'), Input('null'), Input('null'), Input('null'), );
    }
    component.position.row++;

    component.printCell(loadsRow1, 1, Input('PointLoads1'));
    component.printCell(loadsRow2, 3, Input('PointLoads2'));
    component.printCell(loadsRow1, 5, Input('DistLoads1'));
    component.printCell(loadsRow2, 9, Input('DistLoads2'));

    component.printRow(TextBU('Trial Section:'));
    component.printRow(TextREq('Shape'), Input('Shape'));
    
    component.printCell(1,12,Output('outputOrigin'));

    // insert formula
    let f = Formula("tk.steelwfbeamdesign", 
        component.getCellAddress('Span', ['TFBracing', 'BFBracing'], 
            ['Lb_Top_start','Lb_Bott_end'], ['Fy','E'],
            ['LC1','Limit2'], ['PointLoads1','PointLoads2'], ['DistLoads1', 'DistLoads2'], 'Shape'));
    component.setFormula('outputOrigin', f);

    // turn screen updating back on
    await context.sync();
}

