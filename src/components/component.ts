interface Position {
  sheet: Excel.Worksheet,
  row: number, 
  column: number;
}

// interface for input parameters
// "Sds" -> "B3" (cell address)
interface Params {
  [key: string]: string
}

interface Output {
  [key: string]: Position
}

export class Component {
  position: Position; // track position in document for printRow() / printRows()
  params: Params = {}; // input parameters
  output: Output = {}; // output values

  async setPosition(context) {
    const selectedRange = context.workbook.getSelectedRange();
    selectedRange.load(["rowIndex", "columnIndex"]);
    await context.sync();

    // set initial position (from currently active cell in the workbook)
    this.position = {
      sheet: selectedRange.worksheet,
      row: selectedRange.rowIndex,
      column: selectedRange.columnIndex
    };
  }

  getCellAddress(...inputs) {
    // used in formulas
    // get cell address for input parameters as array, e.g. ["A3", "A4", "A5"]
    let positions = [];
    for (let input of inputs) {
      positions.push(this.params[input]);
    }
    return positions;
  }

  printRows(...rows) {
    rows.forEach(row => this.printRow(...row))
  }

  printRow(...cells) {
    let pos = this.position;
    let initialColumn = pos.column;
    cells.forEach(cell => {
      let range = pos.sheet.getCell(pos.row, pos.column);
      applyFormatting(range, cell.format);
      range.values = cell.value;
      if (cell.input) {
        // remember position as cell address, e.g. "B3"
        // useful for formulas
        this.params[cell.name] = `${numberToLetters(pos.column)}${pos.row+1}`;
      }
      if (cell.output) {
        // remember position for setFormula()
        // insert formula into specific cell (selected by output value name)
        this.output[cell.name] = Object.assign({}, pos);
      }
      pos.column++;
    })
    // get back to beginning after row is displayed
    pos.column = initialColumn;
    // proceed to next row
    pos.row++;
  }

  setFormula(outputParamName, formula) {
    let cell = this.output[outputParamName];
    console.log(cell);
    let range = cell.sheet.getCell(cell.row, cell.column);
    range.values = formula.value;
  }
}

function applyFormatting(cell, format) {
  for (const property in format) {

    // borders
    if (property === 'borders') {
      ['Top', 'Bottom', 'Left', 'Right'].forEach(side => {
        cell.format.borders.getItem('Edge' + side).style = 'Continuous';
      })
      continue;
    }

    // number formatting
    if (property === 'numberFormat') {
      let nf = format[property];
      cell.numberFormat = [[nf]];
      continue;
    }
    
    // font, background, etc...
    if (typeof format[property] === "object"){
      for (const option in format[property]) {
        cell.format[property][option] = format[property][option];
      }
    } else {
      cell.format[property] = format[property];
    }
  }
}

// convert number to Excel column letter, e.g. 27 => AB
function numberToLetters(num) {
  let letters = '';
  while (num >= 0) {
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + letters;
    num = Math.floor(num / 26) - 1;
  }
  return letters;
}