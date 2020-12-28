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

function numberToLetters(num) {
  let letters = ''
  while (num >= 0) {
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + letters
    num = Math.floor(num / 26) - 1
  }
  return letters
}

interface Position {
  sheet: any,
  row: number,
  column: number;
}

interface Params {
  [key: string]: string
}

interface Output {
  [key: string]: Position
}

export class Component {
  context: any;
  position: Position;
  params: Params = {};
  output: Output = {};

  async setPosition(context) {
    const selectedRange = context.workbook.getSelectedRange();
    selectedRange.load(["rowIndex", "columnIndex"]);
    await context.sync();

    this.position = {
      sheet: selectedRange.worksheet,
      row: selectedRange.rowIndex,
      column: selectedRange.columnIndex
    };
  }

  getRange(...inputs) {
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
        // add to params, remember position
        this.params[cell.name] = `${numberToLetters(pos.column)}${pos.row+1}`;
      }
      if (cell.output) {
        // remember position
        this.output[cell.name] = Object.assign({}, pos);
      }
      pos.column++;
    })
    pos.column = initialColumn;
    pos.row++;
  }

  setFormula(outputParamName, formula) {
    let cell = this.output[outputParamName];
    console.log(cell);
    let range = cell.sheet.getCell(cell.row, cell.column);
    range.values = formula.value;
  }
}