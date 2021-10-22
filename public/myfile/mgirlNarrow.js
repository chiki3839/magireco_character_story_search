function mgirlNarrow(htmlName, id_name) {
    //入力データを整理する。
    let keywordtext = document.getElementById(id_name).value.replace(/　/g, ' '); //検索ワード。全角スペースを半角スペースに置換
    keywordtext = keywordtext.replace(/ +/g, ' '); //連続半角スペースを1文字に置換
    keywordtext = keywordtext.replace(/ $/, ''); //最後の半角スペースを削除

    if (htmlName === "index") {
        //属性検索をリセットする。
        document.forms["at_form"].reset();
        document.getElementById("at_result").style.border = "";
        document.getElementById("at_result").innerHTML = "";
    }
    //もし入力が空白文字かブランクだったら全box表示
    if (keywordtext === "") {
        allShow();
        //絞り込みボタン強調を削除
        ndownResetButternReset();
    } else {
        //一旦全魔法少女boxを消す。
        allHidden();

        //入力データを半角スペースで区切って配列を作る。
        const shownames = keywordtext.split(" ");
        allnames.forEach(girlname => {
            let kananame = document.getElementById(girlname).parentNode.dataset.kana;
            if (!kananame) {
                kananame = "";
            } //ふりがなが未設定だったときのレスキュー
            kananame = kananame.replace(/ /g, ''); //ふりがなの姓名をくっつける

            const flg = shownames.some(nameword => {
                return ((girlname.indexOf(nameword) > -1) || (kananame.indexOf(nameword) > -1))
            });
            if (flg) {
                document.getElementById(girlname).parentNode.style.display = "inline";
            }
        });
        //絞り込みリセットボタンを強調する
        ndownResetButternCaution();
    }
    // document.getElementById("ndownword").scrollIntoView(true);
}

//絞り込みした全ての魔法少女ボックスを全て表示する。
function allShow() {
    allnames.forEach(girlname => {
        document.getElementById(girlname).parentNode.style.display = "inline";
    });
}

function girlResetBtnInable(){
    //魔法少女選択リセットボタンを無効にする。
    document.getElementById("mgreset").disabled = true;
    document.getElementById("mgreset2").disabled = true;
}

//全ての魔法少女ボックスを全て隠す。
function allHidden() {
    allnames.forEach(girlname => {
        document.getElementById(girlname).parentNode.style.display = "none";
    });
}