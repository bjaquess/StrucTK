/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
/* global console, document, Excel, Office */

// The initialize function must be run each time a new page is loaded
Office.initialize = () => {
  document.getElementById("sideload-msg").style.display = "none";
  document.getElementById("app-body").style.display = "flex";
  document.getElementById("run").onclick = run;

  document.getElementById('Template').onclick = onclick_Template;
  document.getElementById('SeismicNonStructural').onclick = onclick_SeismicNonStructural;
  document.getElementById('ConcRectFlexure').onclick = onclick_ConcRectFlexure;
  document.getElementById('LoadComboTable').onclick = onclick_LoadCombinations;
}

const buttons = Array.from(document.querySelectorAll('.action-load-component'));
buttons.map(async button => {
  if (button instanceof HTMLElement) {
    button.onclick = async () => {
      const component = await import(`../components/${button.dataset.module}`);
      await Excel.run(async context => {
        await component.execute(context);
      });
    }
  }
})

import { onclick_LoadCombinations } from "../TK Classes/Load Combinations/LoadCombinations_Controller";

import { ConcFlexure_Controller } from "../TK Classes/Concrete Flexure/ConcFlexure_Controller";
async function onclick_ConcRectFlexure() {
  // *** Customize this section ******************************
  let calcBlock = new ConcFlexure_Controller();
  let onNewSheet: boolean = true;
  let trialSheetName: string = 'ConcFlexure';
  // *********************************************************
  try {
    await calcBlock.Initialize(onNewSheet, trialSheetName);
    await Excel.run(async context => {
      const range = context.workbook.getSelectedRange();
      range.load("rowIndex");
      range.load("columnIndex");
      const ws = context.workbook.getSelectedRange().worksheet;
      ws.load("name");
      await context.sync();
      const shapes = context.workbook.worksheets.getItem(ws.name).shapes;
      //const charts = context.workbook.worksheets.getItem(ws.name).charts;
      
      calcBlock.Execute(range, range.rowIndex, range.columnIndex, shapes)
    });
  } catch (error) {console.error(error)}
}

import { Template_Controller } from "../TK Classes/Template/Template_Controller";
async function onclick_Template() {
  // *** Customize this section ******************************
  let calcBlock = new Template_Controller();
  let onNewSheet: boolean = true;
  let trialSheetName: string = 'Template';
  // *********************************************************
  try {
    await calcBlock.Initialize(onNewSheet, trialSheetName);
    await Excel.run(async context => {
      const range = context.workbook.getSelectedRange();
      range.load("rowIndex");
      range.load("columnIndex");
      const ws = context.workbook.getSelectedRange().worksheet;
      ws.load("name");
      await context.sync();
      const shapes = context.workbook.worksheets.getItem(ws.name).shapes;
      const charts = context.workbook.worksheets.getItem(ws.name).charts;
      
      calcBlock.Execute(range, range.rowIndex, range.columnIndex, shapes, charts)
    });
  } catch (error) {console.error(error)}
}


import { SeismicNonStructuralComponents_Controller } from "../TK Classes/Seismic_Loads/Nonstructural/SeismicNonstructuralComponents_Controller";
async function onclick_SeismicNonStructural() {
  let calcBlock = new SeismicNonStructuralComponents_Controller();
  try {
    await Excel.run(async context => {
      const range = context.workbook.getSelectedRange();
      range.load("columnIndex");
      range.load("rowIndex");
      await context.sync();
      let row : number = range.rowIndex;
      let col : number = range.columnIndex;
      calcBlock.ResultsToExcel(range, row, col);
    });
  } catch (error) {
    console.error(error);
  }
}


async function run() {
  try {
    await Excel.run(async context => {
      /**
       * Insert your Excel code here
       */
      const range = context.workbook.getSelectedRange();

      // Read the range address
      range.load("address");

      // Update the fill color
      range.format.fill.color = "yellow";

      await context.sync();
      console.log(`The range address was ${range.address}.`);
    });
  } catch (error) {
    console.error(error);
  }
}
