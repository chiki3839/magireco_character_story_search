function outputJSONv2() {
  //V2では魔法少女欄を(列2)を配列にする。

  const outputFileID = "1kFoEYZ6nJrYQAxGQVwN-SyLg-aPKkH6q";
  //アクティブなスプレッドシートを取得し、そのスプレッドシートにある全てのシートを取得
  var allSheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var outObj = {};

  allSheets.forEach( activeSheet => {
    //シートを二次元配列で取得
    var sheetAry = activeSheet.getDataRange().getValues(); //該当シートの二次元配列
    var sheetName = activeSheet.getName();
    outObj[[sheetName]] = sheetAry.map( coldata =>{
      var girlAry = coldata[1].split('、');
      return [ coldata[0], girlAry, coldata[2] ];
    });  
  });

  //ファイルに出力する。
  DriveApp.getFileById(outputFileID).setContent(JSON.stringify(outObj));
}
