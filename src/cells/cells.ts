export function Heading(value) {
  return {
    value: value,
    format: {
      font: {
        bold: true,
        size: 14
      }
    }
  }
}

export function Text(value) {
  return {
    value: value,
    format: {
      horizontalAlignment: 'Left'
    }
  }
}

export function TextR(value) {
  let t = Text(value);
  t.format.horizontalAlignment = 'Right';
  return t;
}

export function TextC(value) {
  let t = Text(value);
  t.format.horizontalAlignment = 'Center';
  return t;
}

export function TextREq(value) {
  let t = Text(`${value} =`);
  t.format.horizontalAlignment = 'Right';
  return t;
}

export function TextBU(value) {
  return {
    value: value,
    format: {
      horizontalAlignment: 'Left',
      font: {
        bold: true,
        underline: 'Single',
        size: 12
      }
    }
  }
}

export function Input(name) {
  return {
    input: true,
    name: name,
    value: "",
    format: {
      horizontalAlignment: 'Center',
      numberFormat: "0.00",
      font: {
        bold: true,  
      },
      fill: {
        color: 'DAEEF3'
      },
      borders: true
    }
  }
}

export function InputDropDown(value, dropDownListItems: string) {
  return {
    input: true,
    dropDownList: dropDownListItems,
    name: value,
    value: dropDownListItems.split(',')[0],
    format: {
      horizontalAlignment: 'Center',
      font: {
        bold: true,  
      },
      fill: {
        color: 'DAEEF3'
      },
      borders: true
    }
  }
}

export function MergeRightBold(value: string, numCells: number) {
  return {
    mergedCells: numCells,
    value: value,
    format: {
      horizontalAlignment: 'Left',
      font: {
        bold: true
      },
      borders: true
    }
  }
}

export function Output(name) {
  return {
    output: true,
    name: name,
    value: '',
    format: {
      numberFormat: '0.00',
    }
  }
}

export function OutputWithBorder(name) {
  return {
    output: true,
    name: name,
    value: "",
    format: {
      numberFormat: "0.00",
      borders: true
    }
  }
}

export function Empty() {
  return {
    value: "",
    format: {}
  }
}

export function Hint(value) {
  return {
    value: value,
    format: {
      font: {
        italic: true,
        color: 'gray',
        size: 10
      }
    }
  }
}



export function Formula(value, params) {
  return {
    value: `=${value}(${params.join(',')})`,
    format: {}
  }
}