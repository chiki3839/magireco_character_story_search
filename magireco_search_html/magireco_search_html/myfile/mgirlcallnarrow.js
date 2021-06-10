function mgirlcallnarrow(ele) {
    //calltableのデータを元に呼びかけの有無で魔法少女boxの絞り込みをするファンクション
    //ダブルクリックで呼び出す。
    //ダブルクリックしたアイコンの魔法少女名をget
    const id = ele.id;
    //一旦全boxを隠す。
    allhidden();
    //本人は表示して選択する。
    document.getElementById(id).parentNode.style.display = "inline";
    document.getElementById(id).checked = true;

    let callRange = document.getElementById("callcate").vector.value;

    if (callRange === "call") { //呼んだ事がある相手を表示
        for (let girlname of calltable.get(id).keys()) {
            if (document.getElementById(girlname) != null) {
                document.getElementById(girlname).parentNode.style.display = "inline";
            }
        }

    } else if (callRange === "called") { //呼ばれたことがある相手を表示
        for (let girlname of calledMap.get(id)) {
            document.getElementById(girlname).parentNode.style.display = "inline";
        }

    } else if (callRange === "mutual") { //相互に呼んだことがある相手を表示
        for (let callname of calltable.get(id).keys()) {
            if (calledMap.get(id).has(callname)) {
                document.getElementById(callname).parentNode.style.display = "inline";
            }
        }

    } else if (callRange === "OR") { //呼ぶ呼ばれるどちらかの相手を表示
        let orname = new Set(calltable.get(id).keys());
        for (let data of calledMap.get(id)) { orname.add(data); } //呼ばれたデータを追加
        for (let girlname of orname) {
            if (document.getElementById(girlname) != null) {
                document.getElementById(girlname).parentNode.style.display = "inline";
            }
        }

    } else if (callRange === "oneWay") { //呼ぶ呼ばれる片方だけの相手を表示
        const orname = new Set(calltable.get(id).keys());
        for (let data of calledMap.get(id)) { orname.add(data); } //ORを作る
        const callnames = new Set(calltable.get(id).keys());
        const andname = new Set();
        for (let data of calledMap.get(id)) { //ANDを作る
            if (callnames.has(data)) {
                andname.add(data);
            }
        }
        for (let girlname of orname) { // OR - AND = 排他(どちらか片方)
            if (!andname.has(girlname) && document.getElementById(girlname) != null) {
                document.getElementById(girlname).parentNode.style.display = "inline";
            }
        }
    }
    //絞り込みリセットボタンを強調する
    ndownResetButternCaution();
}