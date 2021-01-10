import {Heading, Text, TextREq, Input, OutputWithBorder, Empty, Hint, Formula} from "../../cells/cells";
import {Component} from "../component"

export async function execute(context) {
  let component = new Component();
  await component.setPosition(context);

  // heading
  component.printRow(Heading("Seismic Demands on Nonstructural Components"));
  component.printRow(Text("[Ref. ASCE 7-16: 13.3.1]"))
  component.position.row++; // empty row

  // input
  component.printRows(
    [TextREq("Sds"), Input("Sds"), Empty(), Hint("Spectral acceleration")],
    [TextREq("ap"), Input("ap"), Empty(), Hint("Component amplification factor")],
    [TextREq("Rp"), Input("Rp"), Empty(), Hint("Component amplification factor")],
    [TextREq("Ip"), Input("Ip"), Empty(), Hint("Importance factor")],
    [TextREq("z"), Input("z"), Text("ft"), Hint("Height in structure of point of attachment")],
    [TextREq("h"), Input("h"), Text("ft"), Hint("Average roof height of structure")],
    [TextREq("Wp"), Input("Wp"), Text("lbs"), Hint("Component operating weight")]
  )

  // output
  component.printRows(
    [TextREq("Fp"), OutputWithBorder("fp"), Text("lbs"), Hint("Fp = 0.4 ap Sds Wp (1 + 2 z/h) / (Rp / Ip)  [13.3-1]")],
    [TextREq("Fp max"), OutputWithBorder("fpMax"), Text("lbs"), Hint("Fp <= 1.6 Sds Ip Wp  [13.3-2]")],
    [TextREq("Fp min"), OutputWithBorder("fpMin"), Text("lbs"), Hint("Fp >= 0.3 Sds Ip Wp  [13.3-3]")],
    [TextREq("Fp"), OutputWithBorder("fpFinal"), Text("lbs")]
  )

  // insert formula into first `Fp` cell
  let f = Formula("TK.SEISMICNONSTRUCTURAL2",
    component.getCellAddress("Sds", "ap", "Rp", "Ip", "z", "h", "Wp"));
  component.setFormula("fp", f);

  await context.sync();
}