import {Heading, Text, TextR, Input, Empty, Hint, Formula} from "../../cells/cells";
import {Component} from "../component"

export async function execute(context) {
  let c = new Component();
  await c.setPosition(context);

  // render cells
  c.print(Heading("Seismic Demands on Nonstructural Components"));
  c.position.row++; // empty row
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

  let f = Formula("TK.SEISMICNONSTRUCTURAL", c.getRange("Sds", "ap", "Rp", "Ip", "z", "h", "Wp"));
  c.print(f);

  await context.sync();
}