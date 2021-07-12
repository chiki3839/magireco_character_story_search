function ndownReset(htmlName) {
    //入力情報を削除
    document.getElementById('ndownword1').value = '';
    document.getElementById('ndownword2').value = '';
    allShow(); //全魔法少女を表示
    ndownResetButternReset();
    if (document.forms["at_form"]) {
        document.forms["at_form"].reset();

        if(!htmlName){
        document.getElementById("at_result").style.border = "";
        document.getElementById("at_result").innerHTML = "";
        }
    }
}

function ndownResetButternCaution() {
    //絞り込みリセットボタンを強調する。
    let ndownResetEle = document.getElementsByClassName("ndownReset");
    Array.prototype.forEach.call(ndownResetEle, function (element) {
        element.classList.add("ndownReset_caution");
    });
}

function ndownResetButternReset() {
    //絞り込みリセットボタン強調を解除する。
    let ndownResetEle = document.getElementsByClassName("ndownReset");
    Array.prototype.forEach.call(ndownResetEle, function (element) {
        element.classList.remove("ndownReset_caution");
    });
}

