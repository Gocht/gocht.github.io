function doGet(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetById('12Gm-OCAQTL-sApzNDu2Oe1A_v7yWKLyEtdTFIk-m1oY');
    const data = sheet.getDataRange().getValues();
    const headers = data.shift(); // ["Day", "Zone", "Exercise", "Reps", "Series", "Weight"]
  
    const dayParam = e.parameter.day; // Esperamos algo como ?day=1
  
    if (!dayParam) {
      return ContentService.createTextOutput(JSON.stringify({ error: "Falta parámetro ?day=" }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
  
    const results = data
      .filter(row => String(row[0]) === dayParam)
      .map(row => {
        let obj = {};
        headers.forEach((h, i) => obj[h] = row[i]);
        return obj;
      });
  
    return ContentService
      .createTextOutput(JSON.stringify(results))
      .setMimeType(ContentService.MimeType.JSON);
  }
