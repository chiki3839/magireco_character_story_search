function magicalGirlAttributeSearch(htmlName) {
    //属性でチェックされた値だけを配列に入れる。配列attributeに選択した値が入る。
    const elFavorites = document.querySelectorAll(
        '#at_form [name="at_attribute"]'
    );
    const attribute = [...elFavorites]
        .filter((el) => el.checked)
        .map((el) => el.value);

    //ボタンを押したときのスクロール座標をコピー
    //const y = window.pageYOffset;

    //絞り込み検索テキストをリセットする。
    document.getElementById('ndownword1').value = '';
    document.getElementById('ndownword2').value = '';

    //もし属性チェックが設定が空の場合は、魔法少女選択と属性表示をリセットして終わり。
    if (attribute.length === 0) {
        allShow();
        //絞り込みリセットボタン強調を解除する。
        ndownResetButternReset();

        if(!htmlName){
        document.getElementById("at_result").style.border = "";
        document.getElementById("at_result").innerHTML = "";
        }
        //y座標をスクロールさせる
        //scrollTo( 0, y );

        return;
    }

    //一旦魔法少女ボックスをすべて隠す。
    allHidden();

    let charaindex = [];

    //キャラ全員の属性値オブジェクトの配列を回す。
    for (let [girlname, at] of charaAttribute) {
        let muchCnt = 0;
        attribute.forEach(set_at_data => {
            if (at.has(set_at_data)) {
                muchCnt++;
            }
        });

        //alert(muchCnt + "+" +document.getElementById("at_form").at_and_or.value);
        //該当キャラの属性が設定値と一致した個数がmuchCntに入っている。
        if (
            (document.getElementById("at_form").at_and_or.value === "AND" &&
                attribute.length === muchCnt) ||
            (document.getElementById("at_form").at_and_or.value === "OR" &&
                muchCnt > 0)
        ) {
            //属性検索がandで、設定値とマッチした個数が一致したとき、または属性絵検索がorでマッチした個数が1個以上のときhit。

            //キャラを表示する。
            document.getElementById(girlname).parentNode.style.display = "inline";
            //allnamesをキャラ名でサーチしてindexを積む。
            charaindex.push(allnames.findIndex(charaname => charaname === girlname));
        }
    };
    //charaindexを数字の若い順にソートする。
    charaindex.sort((a, b) => a - b);
    //console.log(attribute);

    //属性検索結果を表示するhtmlを作る。
    let at_resultHtml = "";
    let at_and_or = document.getElementById("at_form").at_and_or.value;
    at_and_or = at_and_or.toLowerCase();

    //属性検索結果のヘッダを作る。
    at_resultHtml += '<h2 class="at_resultHeader" >';
    attribute.forEach(value => {
        at_resultHtml += value + " " + at_and_or + " ";
    });
    const delnum = -(at_and_or.length + 2);
    at_resultHtml = at_resultHtml.slice(0, delnum);
    at_resultHtml += "</h2>";

    //属性検索結果の画像アイコンを並べる。
    charaindex.forEach(cindex => {
        at_resultHtml += '<span class="resultGirl result" style="position:relative;"><img src="./img/webp/' +
            allnames[cindex] +
            '.webp" alt="' + allnames[cindex] + '"><span class="girlName">' + allnames[cindex] + "</span></span>";
    });
    if(!htmlName){
    //index.htmlの場合、絞り込み結果を表示＆ボーダーのスタイルを追加
    document.getElementById("at_result").innerHTML = at_resultHtml;
    document.getElementById("at_result").style.border = "solid 1px #ff3b66";
}

    //絞り込みリセットボタンを強調する。
    ndownResetButternCaution();
}

//属性検索フォームのリセット設定
function mgirlShReset(htmlName) {
    allShow();
    document.forms["at_form"].reset();
    ndownResetButternReset();

    if(!htmlName){
    document.getElementById("at_result").style.border = "";
    document.getElementById("at_result").innerHTML = "";
    }
}