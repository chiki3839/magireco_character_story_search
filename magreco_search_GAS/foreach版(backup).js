//Ajaxの送受信を行う。HTTP GETをハンドリングする
function doGet2(e) {

  //Googleドライブ内のJSONデータ(Ajax用ストーリー検索データ.JSON)のID
  var JSONfileID = "1XFEVa2OPHLvPsTdayyGNcoMI_ejPpnr_";
  
  
  //入力された各種パラメータを取得する。
  var and_or = e.parameter.and_or;
  var storyAry = e.parameter.story_csv.split(',');
  var netabare = e.parameter.netabare;
  var charaAry = e.parameter.chara_csv.split(',');
  var star     = e.parameter.star;
  /*
  var and_or = "AND";
  var storyAry = "メイン【第1部】,メイン【第1部】".split(',');
  var netabare = "true";
  var charaAry = "八雲みたま,七海やちよ".split(',');
  var star     = "true";
  */
  
  //パラメータに沿って出力データを作る。
  var charaAryCP = charaAry.slice(); //sliceをつけることで値渡しになる。
  var addGirl = 0; //★チェックで追加された魔法少女の数
  
  //★印チェックされたときの処理。ver違いが実装された時に変更する。//////////////////////////////////////
  if(star === "true"){
    if(charaAry.indexOf("環いろは") != -1){
      charaAry.push("環いろは(水着ver)");
      charaAry.push("いろはちゃん");
      charaAry.push("いろは・やちよ(決戦ver)");
      addGirl += 3;
    }
    if(charaAry.indexOf("七海やちよ") != -1){
      charaAry.push("やちよ・みふゆ(始まりver)");
      charaAry.push("いろは・やちよ(決戦ver)");
      addGirl +=2;
    }
    if(charaAry.indexOf("由比鶴乃") != -1){
      charaAry.push("ウワサの鶴乃");
      charaAry.push("鶴乃・フェリシア(宅配ver)");
      addGirl +=2;
    }
    if(charaAry.indexOf("深月フェリシア") != -1){
      charaAry.push("フェリシアちゃん");
      charaAry.push("鶴乃・フェリシア(宅配ver)");
      addGirl +=2;
    }
    if(charaAry.indexOf("梓みふゆ") != -1){
      charaAry.push("やちよ・みふゆ(始まりver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("アリナ・グレイ") != -1){
      charaAry.push("ホーリーアリナ");
      addGirl +=1;
    }
    if(charaAry.indexOf("水波レナ") != -1){
      charaAry.push("レナちゃん(アイドルver)");
      charaAry.push("レナ・かえで(水着ver)");
      addGirl +=2;
    }
    if(charaAry.indexOf("秋野かえで") != -1){
      charaAry.push("レナ・かえで(水着ver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("十咎ももこ") != -1){
      charaAry.push("十咎ももこ(シスターver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("和泉十七夜") != -1){
      charaAry.push("和泉十七夜(ヴァンパイアver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("八雲みたま") != -1){
      charaAry.push("八雲みたま(晴着ver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("鹿目まどか") != -1){
      charaAry.push("鹿目まどか(晴着ver)");
      charaAry.push("アルティメットまどか");
      charaAry.push("まどか先輩");
      addGirl +=3;
    }
    if(charaAry.indexOf("暁美ほむら") != -1){
      charaAry.push("暁美ほむら(眼鏡ver)");
      charaAry.push("暁美ほむら(水着ver)");
      addGirl +=2;
    }
    if(charaAry.indexOf("美樹さやか") != -1){
      charaAry.push("美樹さやか(晴着ver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("巴マミ") != -1){
      charaAry.push("ホーリーマミ");
      charaAry.push("巴マミ(水着ver)");
      addGirl +=2;
    }
    if(charaAry.indexOf("佐倉杏子") != -1){
      charaAry.push("佐倉杏子(水着ver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("百江なぎさ") != -1){
      charaAry.push("百江なぎさ(バレンタインver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("天音月夜") != -1){
      charaAry.push("天音姉妹(水着ver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("天音月咲") != -1){
      charaAry.push("天音姉妹(水着ver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("五十鈴れん") != -1){
      charaAry.push("梨花・れん(クリスマスver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("綾野梨花") != -1){
      charaAry.push("梨花・れん(クリスマスver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("万年桜のウワサ") != -1){
      charaAry.push("万年桜のウワサ(水着ver)");
      addGirl +=1;
    }
    if(charaAry.indexOf("タルト") != -1){
      charaAry.push("タルト(ver.Final)");
      addGirl +=1;
    }
    if(charaAry.indexOf("里見灯花") != -1){
    charaAry.push("灯花・ねむ(聖夜ver)");
    addGirl +=1;
    }
    if(charaAry.indexOf("柊ねむ") != -1){
    charaAry.push("灯花・ねむ(聖夜ver)");
    addGirl +=1;
    }
  }
  //★キャラクタここまで////////////////////////////////

  //全ヒット数をカウントする
  var allCnt = 0;
  //出力用データ
  var outData = {};

  //Googleドライブにおいているデータファイルをオブジェクトに変換
  var dataObj = JSON.parse(DriveApp.getFileById(JSONfileID).getBlob().getDataAsString());

  //セットしたストーリー名ごとにサーチ
  storyAry.forEach(storyName =>{
    var storyData = []; //muchしたストーリー行を格納する配列。

    //ストーリーの一行ごとにサーチ
    dataObj[storyName].forEach(storyLine =>{
      //ストーリーの魔法少女と検索対象の魔法少女がマッチした数をカウント
      var _ = Underscore.load();
      var storyCharaCnt = _.intersection(storyLine[1].split('、'), charaAry).length;

      //一行が条件に合うかチェックする。
      var muchflg = false;
      if(storyCharaCnt === 0){muchflg = false;}
        else if(and_or === "AND" && charaAry.length - addGirl === storyCharaCnt){muchflg = true;}
        else if(and_or === "OR" && storyCharaCnt > 0){muchflg = true;}
        else if(and_or === "EXCLUSIVE" && storyCharaCnt === 1){muchflg = true;}
        else if(and_or === "ONLY" && ((storyLine[1].match(/、/g)||[]).length + 1) === storyCharaCnt && charaAry.length - addGirl === storyCharaCnt){muchflg = true;}
  
      //もし条件に合えば出力を積む。
      if(muchflg){
        if(netabare === "true"){ storyData.push(storyLine); }
        else{ storyData.push([storyLine[0], storyLine[1]]);  }
      }
    });
    outData[storyName] = storyData;
  });
  
    //Ajaxの返信準備
    //返信するデータテキスト
    var responseText;
    var out = ContentService.createTextOutput();
  
    //受信データにcallback(関数)指定があればJSONPを返信。なければJSONを返信。
    var callback = e.parameter.callback;
    if (callback) {
      responseText = callback + "(" + JSON.stringify(outData) + ")";
      //Mime Typeをapplication/javascriptに設定
      out.setMimeType(ContentService.MimeType.JAVASCRIPT);
    } else {
      responseText = JSON.stringify(outData);
      //Mime Typeをapplication/jsonに設定
      out.setMimeType(ContentService.MimeType.JSON);
    }
    //JSONPテキストをセットする
    out.setContent(responseText);
    return out;
  }