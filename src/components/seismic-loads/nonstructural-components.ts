import {Heading, Text, TextREq, Input, OutputWithBorder, Empty, Hint, Formula} from "../../cells/cells";
import {Component} from "../component"
import {AddNewSheet} from "../../Builder Functions/AddNewSheet";

export async function execute(context, options = {newSheet: false}) {
  let component = new Component();

  if (options.newSheet) {
    // await AddNewSheet("Seismic Demands on Nonstructural Components");
  }

  await component.setPosition(context);

  // proposal - API preview for images
  component.insertImage(IMG, {moveX: 8, moveY: 0, scale: 0.5});

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

  component.position.row++; // empty row

  // proposal - API to get data from large CSV
  const filter = (row) => {
    if (row.year === 2019 && row.industry_name_ANZSIC === "Construction") {
      return row;
    }
  }
  const action = (result) => {
    result.sort((a, b) => b.value - a.value) // descending order, "value" field
    for (let row of result) {
      component.printRow(Text(row.variable), Text(row.value), Text(row.unit));
    }
  }
  component.parseCSV(context, "dataset", filter, action);

  await context.sync();
}

const IMG = `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`