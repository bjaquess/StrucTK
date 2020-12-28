import {Heading, Text, TextR, Input, Output, Empty, Hint, Formula} from "../../cells/cells";
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
    [TextR("Sds"), Input("Sds"), Empty(), Hint("Spectral acceleration")],
    [TextR("ap"), Input("ap"), Empty(), Hint("Component amplification factor")],
    [TextR("Rp"), Input("Rp"), Empty(), Hint("Component amplification factor")],
    [TextR("Ip"), Input("Ip"), Empty(), Hint("Importance factor")],
    [TextR("z"), Input("z"), Text("ft"), Hint("Height in structure of point of attachment")],
    [TextR("h"), Input("h"), Text("ft"), Hint("Average roof height of structure")],
    [TextR("Wp"), Input("Wp"), Text("lbs"), Hint("Component operating weight")]
  )

  // output
  component.printRows(
    [TextR("Fp"), Output("fp"), Text("lbs"), Hint("Fp = 0.4 ap Sds Wp (1 + 2 z/h) / (Rp / Ip)  [13.3-1]")],
    [TextR("Fp max"), Output("fpMax"), Text("lbs"), Hint("Fp <= 1.6 Sds Ip Wp  [13.3-2]")],
    [TextR("Fp min"), Output("fpMin"), Text("lbs"), Hint("Fp >= 0.3 Sds Ip Wp  [13.3-3]")],
    [TextR("Fp"), Output("fpFinal"), Text("lbs")]
  )

  let f = Formula("TK.SEISMICNONSTRUCTURAL2",
                  component.getRange("Sds", "ap", "Rp", "Ip", "z", "h", "Wp"));
  component.setFormula("fp", f);

  await context.sync();
}