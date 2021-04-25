//Ajaxの送受信を行う。HTTP GETをハンドリングする
function doGet(e) {
  //Googleドライブ内のJSONデータのID
  var JSONfileID = "1kFoEYZ6nJrYQAxGQVwN-SyLg-aPKkH6q";


  //入力された各種パラメータを取得する。
  var      and_or = e.parameter.and_or;
  var    storyAry = e.parameter.story_csv.split(',');
  //var    netabare = e.parameter.netabare;
  var    charaAry = e.parameter.chara_csv.split(',');
  var        star = e.parameter.star;
  var keywordtext = e.parameter.keywordtext;

/*
  var and_or = "AND";
  var storyAry = "アニメ".split(',');
//  var netabare = "false";
  var charaAry = "".split(',');
  var star     = "false";
  var keywordtext = "電車";
*/

  if(!keywordtext){ keywordtext = "";} //keywordtextが異常値の場合、念の為空文字に変更。
  keywordtext = keywordtext.replace(/　/g, ' ');  //全角スペースを半角に置換。
  keywordtext = keywordtext.replace(/ +/g, ' '); //連続半角スペースを1文字に置換
  var wordtextAry = keywordtext.split(' '); //検索ワードの配列
  
  //パラメータに沿って出力データを作る。
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
      charaAry.push("究極まどか先輩");
      addGirl +=4;
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
    if(charaAry.indexOf("二葉さな") != -1){
    charaAry.push("ウワサのさな");
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

  /* ネタバレワード検索をするかどうか、ループの中にif文を入れると時間がかかるため、
     1. ネタバレワード検索なし(今までと同じ)
     2. ネタバレワード検索あり、魔法少女選択なし
     3. ネタバレワード検索あり、魔城少女選択あり
     の3つに分けて、if文で処理をわける。それぞれでループを設定する。(そのほうが多分早い)  
   */
  if(!wordtextAry[0]){ //ネタバレ検索ワードがない場合(従来と同じ)
    //セットしたストーリー名ごとにサーチ
    storyAry.forEach(storyName =>{
      //ストーリーの一行ごとにサーチ
      outData[storyName] = dataObj[storyName].filter(storyLine =>{
        //ストーリーの魔法少女と検索対象の魔法少女がマッチした数をカウント
        var _ = Underscore.load();
        var storyCharaCnt = _.intersection(storyLine[1], charaAry).length;

        //魔法少女選択の条件にhitするかチェック
        var charamuchflg = false;
        if(storyCharaCnt === 0){charamuchflg = false;}
        else if(and_or === "AND" && charaAry.length - addGirl === storyCharaCnt)    
          {charamuchflg = true;}
        else if(and_or === "OR" && storyCharaCnt > 0){charamuchflg = true;}
        else if(and_or === "EXCLUSIVE" && storyCharaCnt === 1){charamuchflg = true;}
        else if(and_or === "ONLY" && storyLine[1].length
        === storyCharaCnt && charaAry.length - addGirl === storyCharaCnt){charamuchflg = true;}
        return charamuchflg;
      });
    });
  }else if(!charaAry[0]){ //ネタバレ検索ワードあり。魔法少女選択なし
    //セットしたストーリー名ごとにサーチ
    storyAry.forEach(storyName =>{
      //ストーリーの一行ごとにサーチ
      outData[storyName] = dataObj[storyName].filter(storyLine =>{
        return wordtextAry.every(keyword =>{
          return (storyLine[2].indexOf(keyword) > -1);
        });
      });
    });
  }else{ //ネタバレ検索ワードあり。魔法少女選択あり
    //セットしたストーリー名ごとにサーチ
    storyAry.forEach(storyName =>{
      //ストーリーの一行ごとにサーチ
      outData[storyName] = dataObj[storyName].filter(storyLine =>{
        //ストーリーの魔法少女と検索対象の魔法少女がマッチした数をカウント
        var _ = Underscore.load();
        var storyCharaCnt = _.intersection(storyLine[1], charaAry).length;

        //魔法少女選択の条件にhitするかチェック
        var charamuchflg = false;
        if(storyCharaCnt === 0){charamuchflg = false;}
        else if(and_or === "AND" && charaAry.length - addGirl === storyCharaCnt)    
          {charamuchflg = true;}
        else if(and_or === "OR" && storyCharaCnt > 0){charamuchflg = true;}
        else if(and_or === "EXCLUSIVE" && storyCharaCnt === 1){charamuchflg = true;}
        else if(and_or === "ONLY" && storyLine[1].length
        === storyCharaCnt && charaAry.length - addGirl === storyCharaCnt){charamuchflg = true;}
        var wordflg =  wordtextAry.every(keyword =>{
          return (storyLine[2].indexOf(keyword) > -1);
        });
        return (charamuchflg && wordflg);
      });
    });
  }

  console.log(JSON.stringify(outData));
  //データ作成完了。Ajaxの返信準備
  //返信するデータテキスト
  var responseText;
  var out = ContentService.createTextOutput();
  
  //GASはクロスドメイン制限解除ずみなのでコールバック不要。直接JSONを返信。
  responseText = JSON.stringify(outData);
  //Mime Typeをapplication/jsonに設定
  out.setMimeType(ContentService.MimeType.JSON);
  //JSONテキストをセットする
  out.setContent(responseText);
  return out;
}