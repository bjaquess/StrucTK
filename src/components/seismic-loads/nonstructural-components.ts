import {Heading, Text, TextR, Input, Output, Empty, Hint, Formula} from "../../cells/cells";
import {Component} from "../component"

export async function execute(context) {
  let c = new Component();
  await c.setPosition(context);

  // heading
  c.print(Heading("Seismic Demands on Nonstructural Components"));
  c.print(Text("[Ref. ASCE 7-16: 13.3.1]"))
  c.position.row++; // empty row

  // input
  c.print(TextR("Sds"), Input("Sds"), Empty(),
          Hint("Spectral acceleration"));
  c.print(TextR("ap"), Input("ap"), Empty(),
          Hint("Component amplification factor"));
  c.print(TextR("Rp"), Input("Rp"), Empty(),
          Hint("Component amplification factor"));
  c.print(TextR("Ip"), Input("Ip"), Empty(),
          Hint("Importance factor"));
  c.print(TextR("z"), Input("z"), Text("ft"),
          Hint("Height in structure of point of attachment"));
  c.print(TextR("h"), Input("h"), Text("ft"),
          Hint("Average roof height of structure"));
  c.print(TextR("Wp"), Input("Wp"), Text("lbs"),
          Hint("Component operating weight"));

  // output
  c.print(TextR("Fp"), Output("fp"), Text("lbs"),
          Hint("Fp = 0.4 ap Sds Wp (1 + 2 z/h) / (Rp / Ip)  [13.3-1]"));
  c.print(TextR("Fp max"), Output("fpMax"), Text("lbs"),
          Hint("Fp <= 1.6 Sds Ip Wp  [13.3-2]"));
  c.print(TextR("Fp min"), Output("fpMin"), Text("lbs"),
          Hint("Fp >= 0.3 Sds Ip Wp  [13.3-3]"));
  c.print(TextR("Fp"), Output("fpFinal"), Text("lbs"));

  // rewind to first output cell
  c.position.row = c.position.row - 4;
  c.position.column++;
  let f = Formula("TK.SEISMICNONSTRUCTURAL2",
                  c.getRange("Sds", "ap", "Rp", "Ip", "z", "h", "Wp"));
  c.print(f);

  await context.sync();
}