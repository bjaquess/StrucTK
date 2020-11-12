/* global Excel */

export const SheetNameOfActiveWS = async() => {
    return await Excel.run(async (context) => {
      const aws = context.workbook.worksheets.getActiveWorksheet();
      aws.load("name");
      await context.sync();
      return aws.name;
    });
  }