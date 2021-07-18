function getData(id, sheetName) {
  var sheet = SpreadsheetApp.openById(id).getSheetByName(sheetName);
  var rows = sheet.getDataRange().getValues();
  var keys = rows.splice(0, 1)[0];
  keys[1] = 'ID';
  return rows.map(function(row) {
    var obj = {}
    row.map(function(item, index) {
      obj[keys[index]] = item;
    });
    return obj;
  });
}

function doGet() {
  var data = getData('1Xzv7e_YgwkChqXApmRj2cbkTZuq9L9Cu8Du9NEp6E14', '呼びかけ一覧');
  return ContentService.createTextOutput(JSON.stringify(data, null, 2))
  .setMimeType(ContentService.MimeType.JSON);
}