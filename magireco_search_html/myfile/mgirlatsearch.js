function magicalGirlAttributeSearch() {
    //属性でチェックされた値だけを配列に入れる。配列attributeに選択した値が入る。
    const elFavorites = document.querySelectorAll(
        '#at_form [name="at_attribute"]'
    );
    const attribute = [...elFavorites]
        .filter((el) => el.checked)
        .map((el) => el.value);

    //もし属性チェックが設定が空の場合は、魔法少女選択と属性表示をリセットして終わり。
    if (attribute.length === 0) {
        document.getElementById("at_result").style.border = "";
        document.getElementById("at_result").innerHTML = "";
        allshow();
        return;
    }

    //絞り込み検索テキストをリセットする。
    document.getElementById('ndownword1').value = '';
    document.getElementById('ndownword2').value = '';
    //一旦魔法少女ボックスをすべて隠す。
    allhidden();

    var charaindex = [];
    //キャラ全員の属性値オブジェクトの配列を回す。
    charaAttribute.forEach(function (charaObj) {
        var muchCnt = 0;
        attribute.forEach(function (set_at_data) {
            var cnfflag = charaObj["attribute"].some(function (
                chara_attribute
            ) {
                return chara_attribute === set_at_data;
            });
            if (cnfflag) {
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
            document.getElementById(charaObj["name"]).parentNode.style.display = "inline";
            //allnamesをキャラ名でサーチしてindexを積む。
            charaindex.push(allnames.findIndex(charaname => charaname === charaObj["name"]));
        }
    });
    //charaindexを数字の若い順にソートする。
    charaindex.sort((a, b) => a - b);
    //console.log(attribute);

    //属性検索結果を表示するhtmlを作る。
    var at_resultHtml = "";
    var at_and_or = document.getElementById("at_form").at_and_or.value;
    at_and_or = at_and_or.toLowerCase();

    //属性検索結果のヘッダを作る。
    at_resultHtml += '<h2 class="at_resultHeader" >';
    attribute.forEach(value => {
        at_resultHtml += value + " " + at_and_or + " ";
    });
    var delnum = -(at_and_or.length + 2);
    at_resultHtml = at_resultHtml.slice(0, delnum);
    at_resultHtml += "</h2>";

    //属性検索結果の画像アイコンを並べる。
    charaindex.forEach(cindex => {
        at_resultHtml += '<span class="resultGirl result" style="position:relative;"><img src="./img/webp/' +
            allnames[cindex] +
            '.webp" alt="' + allnames[cindex] + '"><span class="girlName">' + allnames[cindex] + "</span></span>";
    });
    document.getElementById("at_result").innerHTML = at_resultHtml;

    //結果にボーダーのスタイルを追加
    document.getElementById("at_result").style.border = "solid 1px #ff3b66";
}

//属性検索フォームのリセット設定
function mgirlShReset() {
    allshow();
    document.forms["at_form"].reset();
    document.getElementById("at_result").style.border = "";
    document.getElementById("at_result").innerHTML = "";
}