function mgirlnarrow(html_name, id_name) {
    //入力データを整理する。
    var keywordtext = document.getElementById(id_name).value.replace(/　/g, ' '); //検索ワード。全角スペースを半角スペースに置換
    keywordtext = keywordtext.replace(/ +/g, ' '); //連続半角スペースを1文字に置換
    keywordtext = keywordtext.replace(/ $/, ''); //最後の半角スペースを削除

    if (html_name === "index") {
        //属性検索をリセットする。
        document.forms["at_form"].reset();
        document.getElementById("at_result").style.border = "";
        document.getElementById("at_result").innerHTML = "";
    }
    //もし入力が空白文字かブランクだったら全box表示
    if (keywordtext === "") {
        allshow();
    } else {
        //一旦全魔法少女boxを消す。
        allhidden();

        //入力データを半角スペースで区切って配列を作る。
        var shownames = keywordtext.split(" ");
        allnames.forEach(girlname => {
            var kananame = document.getElementById(girlname).parentNode.dataset.kana;
            if (!kananame) {
                kananame = "";
            } //ふりがなが未設定だったときのレスキュー
            kananame = kananame.replace(/ /g, ''); //ふりがなの姓名をくっつける

            var flg = shownames.some(nameword => {
                return ((girlname.indexOf(nameword) > -1) || (kananame.indexOf(nameword) > -1))
            });
            if (flg) {
                document.getElementById(girlname).parentNode.style.display = "inline";
            }
        });
    }
    document.getElementById("ndownword").scrollIntoView(true);
}

//絞り込みした全ての魔法少女ボックスを全て表示する。
function allshow() {
    allnames.forEach(girlname => {
        document.getElementById(girlname).parentNode.style.display = "inline";
    });
}

//全ての魔法少女ボックスを全て隠す。
function allhidden() {
    allnames.forEach(girlname => {
        document.getElementById(girlname).parentNode.style.display = "none";
    });
}