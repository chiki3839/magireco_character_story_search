function callOutput() {

  //Map・SetObj型の呼びかけ一覧の二次元連想配列を出力するファイルのID
  const writefile = DriveApp.getFileById('1af7VQlf7EBkzPR1tjNgN3LM46OtBfQOw');

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('呼びかけ一覧');
  const callData = sheet.getDataRange().getValues();
  let callMapString = "const callTable = new Map(["; // 呼びかけの二次元Mapオブジェクトを格納する変数
  let mapSetString = "const calledMap = new Map(["; // 呼びかけられのMapとSet組み合わせオブジェクトの宣言の文字列
  const calDataSrt = "7"; //列の呼びかけデータがスタートする所。0からカウント

  //呼ぶ->呼ばれるのデータを作る。年齢・学年・身長のデータも入れる
  for( let j = 1 ; j < callData.length ; j++){
    let rowArry = []; //行データのハッシュを格納する変数
    for(let i = 2 ; i < callData[0].length ; i++){
      if( callData[j][i] ){
        rowArry.push([callData[0][i],callData[j][i]]);
      }
    }
    //callMapString[callData[j][1]] = rowHash;
    callMapString += '["' + callData[j][1] + '", new Map(' + JSON.stringify(rowArry) + ')],' ;
  };
  callMapString = callMapString.slice( 0, -1 ) ;
  callMapString += "]);";

  //呼ばれる->呼ぶのデータ。「呼ばれた人名」をキーに呼ぶ人の配列をぶら下げる
  for( let j = calDataSrt ; j < callData[0].length ; j++){
    let columnAry = []; //呼んだ人名の配列
    for(let i = 1 ; i < callData.length ; i++){
      if( callData[i][j] ){
        columnAry.push(callData[i][1]);
      }
    }
    //mapSetString  = [callData[0][j]] = columnAry;
    mapSetString += '["' +  callData[0][j] + '", new Set('  + JSON.stringify(columnAry)
    + ')], '
  };
  mapSetString = mapSetString.slice( 0, -1 ) ;
  mapSetString += "]);";

  //Logger.log(callMapString);
  writefile.setContent( callMapString + "\n" + mapSetString );
}
