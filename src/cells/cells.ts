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
  let t = Text(`${value} =`);
  t.format.horizontalAlignment = 'Right';
  return t;
}

export function Input(name) {
  return {
    input: true,
    name: name,
    value: "",
    format: {
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

export function Output(name) {
  return {
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