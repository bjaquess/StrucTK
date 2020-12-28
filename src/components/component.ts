function applyFormatting(cell, format) {
  for (const property in format) {
    if (property === 'borders') {
      ['Top', 'Bottom', 'Left', 'Right'].forEach(side => {
        cell.format.borders.getItem('Edge' + side).style = 'Continuous';
      })
      continue;
    }
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

export class Component {
  context: any;
  position: Position;
  params: Params = {};

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
        this.params[cell.name] = `${numberToLetters(pos.column)}${pos.row+1}`
      }
      pos.column++;
    })
    pos.column = initialColumn;
    pos.row++;
  }
}