//全htmlで共通処理をまとめる。
    //呼び出したhtmlの、girlbox(name="chara")の順に 魔法少女名(value)を取り出して配列にまとめる。
    const allnames = [];
    const checkboxes = document.getElementsByName("chara");
    Array.prototype.forEach.call(checkboxes, function (item) {
        allnames.push(item.value);
    });
