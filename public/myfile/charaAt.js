﻿let charaAttribute = new Map([
  ['那由他・みかげ(クリスマスver)', new Set(['☆45', 'フォレスト', 'サポート', 'AAABC', 'ペア', '限定', 'クリスマス'])],
  ['かりん・アリナ(ハロウィンver)', new Set(['☆45', 'フレイム', 'マギア', 'AAABC', 'ペア', '限定', 'ハロウィン'])],
  ['ホーリーマミ(アニメver)', new Set(['限定', '☆45', 'フォレスト', 'アタック', 'AABBC', 'クリスマス'])],
  ['灯花の父', new Set([])],
  ['瀬奈みこと', new Set([])],
  ['ジュゥべえ', new Set([])],
  ['和紗ミチル', new Set([])],
  ['浅海サキ', new Set([])],
  ['神那ニコ', new Set([])],
  ['昴かずみ', new Set(['限定', '☆45', 'ライト', 'アタック', 'AABBC'])],
  ['真井あかり', new Set(['栄総合学園'])],
  ['由良蛍', new Set(['配布', '☆34', 'アクア', 'ヒール', 'AABBC', '栄総合学園'])],
  ['まどか・いろは', new Set(['限定', '☆45', 'ライト', 'エクシード', 'AABCC', 'ペア'])],
  ['美樹さやか(波乗りver)', new Set(['限定', '☆45', 'アクア', 'ディフェンス', 'AABCC', '水着'])],
  ['ももこ・みたま(人魚ver)', new Set(['限定', '☆45', '無', 'マギア', 'AABBC', '水着', 'ペア'])],
  ['七海やちよ(七夕ver)', new Set(['限定', '☆45', 'アクア', 'アタック', 'ABCCC', '七夕'])],
  ['黒江', new Set()],
  ['愛生まばゆ', new Set([])],
  ['佐鳥かごめ', new Set([])],
  ['日向華々莉', new Set([])],
  ['ペレネル', new Set([])],
  ['里見那由他', new Set(['☆45', 'ダーク', 'サポート', 'AABCC', '宝崎順心学園', '恒常'])],
  ['ミヌゥ', new Set(['☆45', 'ライト', 'マギア', 'AABCC', '聖乙女学園', '限定'])],
  ['イザボー(魔女ver)', new Set(['☆45', 'ダーク', 'バランス', 'ABBBC', '聖乙女学園', '限定'])],
  ['イザボー', new Set([])],
  ['三浦旭', new Set(['時女一族', 'フォークロア'])],
  ['有愛うらら', new Set(['プロミストブラッド', 'フォークロア'])],
  ['遊狩ミユリ', new Set(['☆45', 'アクア', 'アタック', 'ABCCC', '恒常', 'ネオマギウス', '宝崎市立光塚中等教育学校'])],
  ['神楽燦', new Set(['☆45', 'フォレスト', 'ヒール', 'AABCC', '恒常', 'ネオマギウス', '宝崎市立光塚中等教育学校'])],
  ['藍家ひめな', new Set(['神浜未来アカデミー', 'ネオマギウス'])],
  ['栗栖アレクサンドラ', new Set(['☆45', 'フォレスト', 'AABCC', '湯の花国際中学・高等学校', 'フォークロア', 'ネオマギウス', '恒常'])],
  ['氷室ラビ', new Set(['フォークロア'])],
  ['桐野紗枝', new Set(['南凪自由学園'])],
  ['このは・葉月', new Set(['☆45', 'フォレスト', 'マギア', 'AAABC', 'ペア', '限定'])],
  ['究極まどか先輩', new Set(['☆45', 'ライト', 'あるてぃめっと', 'AABCC', '限定'])],
  ['入名クシュ', new Set(['☆45', 'ダーク', 'マギア', 'AAABC', '聖リリアンナ学園', '恒常'])],
  ['ウワサのさな', new Set(['☆45', 'アクア', 'バランス', 'AABBC', '限定'])],
  ['美琴椿', new Set(['☆45', 'フレイム', 'サポート', 'AABCC', '限定'])],
  ['大庭樹里', new Set(['☆45', 'フレイム', 'アタック', 'ABBBC', 'プロミストブラッド', '恒常'])],
  ['いろは・うい(巫女ver)', new Set(['☆45', 'ライト', 'ヒール', 'AAABC', '着物', 'ペア', '限定'])],
  ['灯花・ねむ(聖夜ver)', new Set(['☆45', 'ダーク', 'サポート', 'AABCC', 'クリスマス', 'ペア', '限定'])],
  ['鶴乃・フェリシア(宅配ver)', new Set(['☆45', 'フレイム', 'マギア', 'AABBC', 'クリスマス', 'ペア', '限定'])],
  ['八雲みかげ', new Set(['☆45', 'ダーク', 'サポート', 'AAABC', '大東学園', '冬服', '私服', '恒常'])],
  ['十咎ももこ(シスターver)', new Set(['☆45', 'ライト', 'アタック', 'ABBCC', 'ハロウィン', '限定'])],
  ['和泉十七夜(ヴァンパイアver)', new Set(['☆45', 'ダーク', 'マギア', 'AABCC', 'ハロウィン', '限定'])],
  ['水名の先輩', new Set(['水名女学園'])],
  ['紅晴結菜', new Set(['☆45', 'ライト', 'アタック', 'AABBC', '虎屋町学園', 'プロミストブラッド', '恒常'])],
  ['三輪みつね', new Set(['中央学園', '☆45', 'ライト', 'サポート', 'ABCCC', 'ネオマギウス', '恒常'])],
  ['やちよ・みふゆ(始まりver)', new Set(['☆45', 'アクア', 'アタック', 'ABBBC', 'ペア', '限定'])],
  ['飾利潤', new Set(['☆45', 'アクア', 'サポート', 'ABCCC', '大東学園', 'ネオマギウス', '恒常'])],
  ['時女静香', new Set(['☆45', 'フレイム', 'バランス', 'AABBC', '私服', '冬服', '時女一族', '恒常', '水着'])],
  ['小さなキュゥべえ', new Set(['☆45', 'ダーク', 'エクシード', 'AABBC', '限定'])],
  ['万年桜のウワサ(水着ver)', new Set(['☆45', 'ライト', 'サポート', 'AABCC', '水着', '限定'])],
  ['巴マミ(水着ver)', new Set(['☆45', 'フォレスト', 'アタック', 'AABBC', '水着', '限定'])],
  ['レナ・かえで(水着ver)', new Set(['☆45', 'アクア', 'マギア', 'AABCC', '水着', 'ペア', '限定'])],
  ['青葉ちか', new Set(['☆34', 'フォレスト', 'バランス', 'AABCC', '聖リリアンナ学園', '時女一族', '恒常'])],
  ['佐和月出里', new Set(['☆45', '無', 'ディフェンス', 'AABCC', '私服', 'ピュエラケア', '恒常', 'クリスマス'])],
  ['ラピヌ', new Set(['☆35', 'フレイム', 'ディフェンス', 'AABBC', '私服', '聖乙女学園', '限定'])],
  ['タルト(ver.Final)', new Set(['☆45', 'ライト', 'エクシード', 'ABBBC', '限定'])],
  ['香春ゆうな', new Set(['☆45', 'フォレスト', 'マギア', 'AAABC', '聖リリアンナ学園', '冬服', '私服', '恒常'])],
  ['柚希ほとり', new Set(['☆34', 'ライト', 'バランス', 'AABCC', '聖リリアンナ学園', '恒常'])],
  ['柚希りおん', new Set(['☆34', 'ダーク', 'サポート', 'AABCC', '聖リリアンナ学園', '配布'])],
  ['若菜つむぎ', new Set(['☆45', 'フォレスト', 'ディフェンス', 'AABBC', '水名女学園', '恒常'])],
  ['恵萌花', new Set(['☆34', 'フォレスト', 'サポート', 'AABCC', '栄総合学園', '恒常'])],
  ['安積はぐむ', new Set(['☆45', 'フレイム', 'アタック', 'ABBCC', '大東学園', 'ネオマギウス', '恒常'])],
  ['水樹塁', new Set(['☆45', 'ダーク', 'アタック', 'AABBC', '工匠学舎', '恒常'])],
  ['由貴真里愛', new Set(['☆34', 'アクア', 'ヒール', 'AABCC', '南凪自由学園', '恒常'])],
  ['笠音アオ', new Set(['☆45', 'アクア', 'サポート', 'AAABC', '水着', '蛇の宮中学・高等学校', 'プロミストブラッド', '恒常'])],
  ['レナちゃん(アイドルver)', new Set(['☆45', 'アクア', 'アタック', 'AABCC', '限定'])],
  ['アシュリー・テイラー', new Set(['☆45', 'ダーク', 'アタック', 'ABBBB', '工匠学舎', '限定'])],
  ['篠目ヨヅル', new Set(['☆45', '無', 'アタック', 'ABBBC', '水着', '私服', 'ピュエラケア', '恒常', 'クリスマス'])],
  ['枇々木めぐる', new Set(['☆34', 'フレイム', 'サポート', 'AABCC', '南凪自由学園', '恒常'])],
  ['百江なぎさ(バレンタインver)', new Set(['☆45', 'ダーク', 'サポート', 'AABBC', '限定'])],
  ['南津涼子', new Set(['☆45', 'フレイム', 'バランス', 'AABBC', '南凪自由学園', '時女一族', '恒常'])],
  ['鈴鹿さくや', new Set(['☆24', 'フォレスト', 'アタック', 'ABCCC', '神浜市立大附属', 'プロミストブラッド', '恒常'])],
  ['リヴィア・メディロス', new Set(['☆45', '無', 'サポート', 'AABBC', '私服', 'ピュエラケア', '恒常'])],
  ['智珠らんか', new Set(['☆34', 'フレイム', 'アタック', 'ABBBC', '栄総合学園', 'プロミストブラッド', '恒常'])],
  ['美樹さやか(晴着ver)', new Set(['☆45', 'アクア', 'ディフェンス', 'ABBCC', '着物', '限定'])],
  ['梨花・れん(クリスマスver)', new Set(['☆45', 'ダーク', 'マギア', 'AAABC', 'クリスマス', 'ペア', '限定'])],
  ['宮尾時雨', new Set(['☆45', 'フォレスト', 'サポート', 'AABBC', '工匠学舎', 'ネオマギウス', '恒常'])],
  ['三穂野せいら', new Set(['☆34', 'フレイム', 'バランス', 'ABBCC', '私服', '工匠学舎', '配布'])],
  ['吉良てまり', new Set(['☆34', 'アクア', 'サポート', 'AABCC', '工匠学舎', '冬服', '私服', '恒常'])],
  ['古町みくら', new Set(['☆45', 'ダーク', 'マギア', 'AABBC', '工匠学舎', '私服', '恒常'])],
  ['戦場ヶ原ひたぎ', new Set(['☆35', 'ダーク', 'アタック', 'ABBBC', '配布'])],
  ['八九寺真宵', new Set(['☆45', 'アクア', 'ディフェンス', 'AABCC', '限定'])],
  ['神原駿河', new Set(['☆45', 'フレイム', 'アタック', 'ABBCC', '限定'])],
  ['千石撫子', new Set(['☆45', 'フォレスト', 'マギア', 'AABCC', '限定'])],
  ['羽川翼', new Set(['☆45', 'フレイム', 'サポート', 'AAABC', '限定'])],
  ['忍野忍', new Set(['☆45', 'ライト', 'マギア', 'AABBC', '限定'])],
  ['土岐すなお', new Set(['☆45', 'アクア', 'ヒール', 'AABBC', '霧峰村立霧峰中学校', '時女一族', '恒常', '水着'])],
  ['日向茉莉', new Set(['☆45', 'フォレスト', 'バランス', 'AABCC', '茜ヶ咲中学校', '限定'])],
  ['奏遥香', new Set(['☆35', 'ライト', 'サポート', 'AABBC', '先輩', '茜ヶ咲中学校', '限定'])],
  ['煌里ひかる', new Set(['☆45', 'ライト', 'サポート', 'AABBC', '後輩', '水着', '虎屋町学園', 'プロミストブラッド', '恒常'])],
  ['七瀬ゆきか', new Set(['☆45', 'ライト', 'バランス', 'AABCC', '水名女学園', '恒常'])],
  ['いろは・やちよ(決戦ver)', new Set(['☆45', 'ライト', 'アルティメット', 'AABBC', 'ペア', '限定'])],
  ['広江ちはる', new Set(['☆45', 'フォレスト', 'ディフェンス', 'ABBCC', '松宮市立第一中学校', '時女一族', '恒常', '水着'])],
  ['環いろは', new Set(['パジャマ', '☆25', 'ライト', 'ヒール', 'AABBC', '水着', '着物', 'クリスマス', 'メイド服', '冬服', '私服', '神浜市立大附属', 'マギアユニオン', '配布'])],
  ['七海やちよ', new Set(['パジャマ', '☆25', 'アクア', 'バランス', 'ABBBC', '先輩', '仕事あり', '水着', '着物', '私服', '神浜市立大附属', 'マギアユニオン', '恒常'])],
  ['由比鶴乃', new Set(['パジャマ', '☆25', 'フレイム', 'マギア', 'AABBC', '後輩', '水着', '着物', 'クリスマス', '冬服', '私服', '神浜市立大附属', 'マギアユニオン', '恒常'])],
  ['二葉さな', new Set(['パジャマ', '☆25', 'フォレスト', 'ディフェンス', 'ABBCC', '水着', '冬服', '私服', '着物', '水名女学園', 'マギアユニオン', '恒常'])],
  ['深月フェリシア', new Set(['パジャマ', '☆25', 'ダーク', 'アタック', 'ABBCC', '水着', '冬服', '私服', 'ハロウィン', '着物', '中央学園', 'マギアユニオン', '恒常'])],
  ['梓みふゆ', new Set(['☆45', 'ダーク', 'サポート', 'AAABC', '私服', '水着', '水名女学園', 'クリスマス', 'マギアユニオン', '恒常'])],
  ['里見灯花', new Set(['☆45', 'フレイム', 'マギア', 'AABBC', '水着', '聖リリアンナ学園', 'マギアユニオン', '恒常'])],
  ['アリナ・グレイ', new Set(['☆45', 'フォレスト', 'アタック', 'AABBC', '水着', '栄総合学園', '恒常'])],
  ['水波レナ', new Set(['☆45', 'アクア', 'アタック', 'AAABC', 'クリスマス', '水着', '冬服', '神浜市立大附属', '私服', 'マギアユニオン', '恒常'])],
  ['十咎ももこ', new Set(['☆45', 'フレイム', 'バランス', 'ABCCC', '水着', '冬服', '私服', '神浜市立大附属', 'マギアユニオン', '恒常'])],
  ['秋野かえで', new Set(['☆35', 'フォレスト', 'マギア', 'AABBC', '水着', '冬服', '私服', '神浜市立大附属', 'クリスマス', 'マギアユニオン', '恒常'])],
  ['御園かりん', new Set(['☆45', 'フレイム', 'サポート', 'AAABC', '水着', '栄総合学園', 'マギアユニオン', '恒常'])],
  ['竜城明日香', new Set(['☆35', 'アクア', 'バランス', 'ABBBC', '冬服', '私服', '水名女学園', 'マギアユニオン', '恒常'])],
  ['柊ねむ', new Set(['☆45', 'フォレスト', 'サポート', 'AAABC', '水着', '参京院教育学園', 'マギアユニオン', '恒常'])],
  ['環うい', new Set(['☆45', 'ダーク', 'バランス', 'AABCC', '水着', '神浜市立大附属', '着物', 'マギアユニオン', '恒常'])],
  ['和泉十七夜', new Set(['☆45', 'ライト', 'アタック', 'AABBC', 'メイド服', '冬服', '私服', '水着', '大東学園', 'マギアユニオン', '恒常'])],
  ['八雲みたま', new Set(['☆45', '無', 'サポート', 'AAABC', '私服', '水着', '大東学園', 'クリスマス', 'マギアユニオン', '恒常'])],
  ['天音月夜', new Set(['☆45', 'ダーク', 'バランス', 'ABCCC', 'クリスマス', '冬服', '私服', '水名女学園', 'マギアユニオン', '恒常'])],
  ['天音月咲', new Set(['☆35', 'ライト', 'マギア', 'AABCC', 'クリスマス', '冬服', '私服', '工匠学舎', 'マギアユニオン', '配布'])],
  ['環いろは(水着ver)', new Set(['☆45', 'アクア', 'サポート', 'AABBC', '水着', '限定'])],
  ['ウワサの鶴乃', new Set(['☆35', 'フレイム', 'アタック', 'AABBC', '限定'])],
  ['フェリシアちゃん', new Set(['☆34', 'ダーク', 'アタック', 'ABBCC', '限定'])],
  ['ホーリーアリナ', new Set(['☆45', 'フォレスト', 'アタック', 'ABBBC', 'クリスマス', '限定'])],
  ['八雲みたま(晴着ver)', new Set(['☆45', '無', 'バランス', 'AABBC', '着物', '限定'])],
  ['天音姉妹(水着ver)', new Set(['☆45', 'アクア', 'ヒール', 'AAABC', '水着', 'ペア', '限定'])],
  ['いろはちゃん', new Set(['☆45', 'ライト', 'サポート', 'AABBC', '限定'])],
  ['鹿目まどか', new Set(['パジャマ', '☆45', 'ライト', 'ヒール', 'AABBC', '冬服', '私服', '水着', '見滝原中学校', '恒常'])],
  ['暁美ほむら', new Set(['☆45', 'ダーク', 'アタック', 'ABBBC', '見滝原中学校', '限定'])],
  ['暁美ほむら(眼鏡ver)', new Set(['パジャマ', '☆45', 'ダーク', 'サポート', 'ABBCC', '冬服', '私服', '着物', '見滝原中学校', '配布'])],
  ['美樹さやか', new Set(['パジャマ', '☆45', 'アクア', 'ディフェンス', 'AABCC', '冬服', '私服', '水着', '見滝原中学校', '恒常'])],
  ['巴マミ', new Set(['パジャマ', '☆45', 'フォレスト', 'マギア', 'AABCC', '冬服', '私服', '水着', '見滝原中学校', '着物', '恒常'])],
  ['佐倉杏子', new Set(['パジャマ', '☆45', 'フレイム', 'アタック', 'ABBBC', '冬服', '私服', '水着', 'ハロウィン', '着物', '恒常'])],
  ['佐倉杏子(水着ver)', new Set(['☆45', 'フレイム', 'アタック', 'ABBBC', '水着', '限定'])],
  ['百江なぎさ', new Set(['☆45', 'ダーク', 'マギア', 'AAABC', '私服', '水着', '限定'])],
  ['鹿目まどか(晴着ver)', new Set(['☆45', 'ライト', 'サポート', 'AABBC', '着物', '限定'])],
  ['アルティメットまどか', new Set(['☆45', 'ライト', 'アルティメット', 'AABBC', '限定'])],
  ['まどか先輩', new Set(['☆35', 'ライト', 'バランス', 'AABBC', '配布'])],
  ['暁美ほむら(水着ver)', new Set(['☆45', 'ライト', 'マギア', 'AABBC', '水着', '限定'])],
  ['ホーリーマミ', new Set(['☆45', 'フォレスト', 'アタック', 'ABBCC', 'クリスマス', '限定'])],
  ['矢宵かのこ', new Set(['☆24', 'ダーク', 'アタック', 'AABCC', '水名女学園', 'マギアユニオン', '恒常'])],
  ['空穂夏希', new Set(['☆25', 'アクア', 'サポート', 'ABBCC', 'ハロウィン', '参京院教育学園', 'マギアユニオン', '恒常'])],
  ['都ひなの', new Set(['☆25', 'フォレスト', 'サポート', 'ABBCC', '水着', '冬服', '私服', '南凪自由学園', 'マギアユニオン', '恒常'])],
  ['美凪ささら', new Set(['☆24', 'ライト', 'ディフェンス', 'AABBC', '冬服', '私服', '神浜市立大附属', 'マギアユニオン', '恒常'])],
  ['常盤ななか', new Set(['☆35', 'アクア', 'バランス', 'ABBBC', '参京院教育学園', '恒常'])],
  ['木崎衣美里', new Set(['☆25', 'ダーク', 'サポート', 'AABCC', '冬服', '私服', 'クリスマス', '神浜市立大附属', 'マギアユニオン', '恒常'])],
  ['保澄雫', new Set(['☆25', 'ライト', 'アタック', 'AABCC', 'ハロウィン', '参京院教育学園', '冬服', '私服', 'マギアユニオン', '恒常'])],
  ['志伸あきら', new Set(['☆24', 'アクア', 'アタック', 'ABCCC', 'クリスマス', '参京院教育学園', '恒常'])],
  ['胡桃まなか', new Set(['☆25', 'フレイム', 'ヒール', 'AABCC', '私服', '水名女学園', 'マギアユニオン', '恒常'])],
  ['阿見莉愛', new Set(['☆34', 'ダーク', 'マギア', 'AABBC', '水名女学園', '冬服', '私服', 'マギアユニオン', '恒常'])],
  ['夏目かこ', new Set(['☆25', 'フォレスト', 'ヒール', 'AABBC', 'ハロウィン', '神浜市立大附属', 'マギアユニオン', '恒常', '水着'])],
  ['純美雨', new Set(['☆35', 'アクア', 'ディフェンス', 'ABCCC', '中央学園', 'マギアユニオン', '恒常'])],
  ['伊吹れいら', new Set(['☆34', 'フレイム', 'バランス', 'ABCCC', '神浜市立大附属', '冬服', '私服', 'マギアユニオン', '恒常'])],
  ['桑水せいか', new Set(['☆24', 'アクア', 'サポート', 'AABBC', '神浜市立大附属', 'マギアユニオン', '配布'])],
  ['相野みと', new Set(['☆45', 'フォレスト', 'バランス', 'AABCC', '神浜市立大附属', 'マギアユニオン', '恒常'])],
  ['粟根こころ', new Set(['☆45', 'ライト', 'ディフェンス', 'AABCC', '私服', '水着', '冬服', '中央学園', 'マギアユニオン', '恒常'])],
  ['更紗帆奈', new Set(['☆45', 'ダーク', 'アタック', 'AABBC', '水名女学園', '恒常'])],
  ['毬子あやか', new Set(['☆34', 'ダーク', 'ディフェンス', 'AABBC', 'ハロウィン', '中央学園', 'マギアユニオン', '恒常'])],
  ['眞尾ひみか', new Set(['☆45', 'フレイム', 'ディフェンス', 'ABBCC', '大東学園', 'マギアユニオン', '恒常'])],
  ['江利あいみ', new Set(['☆34', 'フレイム', 'バランス', 'AABBC', '冬服', '私服', '中央学園', 'マギアユニオン', '恒常'])],
  ['五十鈴れん', new Set(['☆45', 'ダーク', 'マギア', 'AABBC', '水着', '冬服', '私服', '神浜市立大附属', 'マギアユニオン', '恒常'])],
  ['静海このは', new Set(['☆45', 'アクア', 'バランス', 'AABBC', '参京院教育学園', '恒常'])],
  ['遊佐葉月', new Set(['☆35', 'ライト', 'サポート', 'ABBCC', '参京院教育学園', '恒常'])],
  ['三栗あやめ', new Set(['☆25', 'フレイム', 'アタック', 'ABCCC', '参京院教育学園', '配布', '水着'])],
  ['加賀見まさら', new Set(['☆34', 'ライト', 'アタック', 'AABCC', '水着', '私服', '冬服', '中央学園', 'マギアユニオン', '恒常'])],
  ['春名このみ', new Set(['☆25', 'フォレスト', 'ヒール', 'AABBC', '冬服', '私服', '神浜市立大附属', 'マギアユニオン', '恒常'])],
  ['綾野梨花', new Set(['☆34', 'フレイム', 'マギア', 'AAABC', '冬服', '私服', '中央学園', 'マギアユニオン', '恒常'])],
  ['梢麻友', new Set(['☆45', 'アクア', 'マギア', 'AABBC', '水名女学園', 'マギアユニオン', '恒常'])],
  ['史乃沙優希', new Set(['☆45', 'ライト', 'サポート', 'AABCC', '水着', '水名女学園', '恒常'])],
  ['千秋理子', new Set(['☆45', 'ライト', 'サポート', 'ABCCC', '私服', '冬服', '工匠学舎', 'マギアユニオン', '恒常'])],
  ['安名メル', new Set(['☆35', 'フォレスト', 'サポート', 'AABBC', '私服', '冬服', '大東学園', 'ハロウィン', '恒常'])],
  ['万年桜のウワサ', new Set(['☆45', 'ライト', 'バランス', 'AABBC', '南凪自由学園', 'マギアユニオン', '限定'])],
  ['観鳥令', new Set(['☆35', 'フレイム', 'アタック', 'ABBCC', '水着', '南凪自由学園', 'ハロウィン', 'マギアユニオン', '恒常'])],
  ['雪野かなえ', new Set(['☆45', 'ダーク', 'バランス', 'ABBBC', '栄総合学園', 'ハロウィン', '恒常'])],
  ['牧野郁美', new Set(['☆45', 'ダーク', 'ヒール', 'AABBC', '私服', 'メイド服', '水着', '栄総合学園', 'マギアユニオン', '恒常'])],
  ['黒', new Set(['☆1', 'ダーク', 'アタック', 'AABCC', '配布'])],
  ['美国織莉子', new Set(['☆35', 'ライト', 'マギア', 'AABCC', '白羽女学院', '恒常'])],
  ['呉キリカ', new Set(['☆45', 'ダーク', 'ディフェンス', 'ABBCC', '私服', '見滝原中学校', '恒常'])],
  ['千歳ゆま', new Set(['☆35', 'フォレスト', 'ヒール', 'AABBC', '私服', '恒常'])],
  ['かずみ', new Set(['☆45', 'ダーク', 'アタック', 'AABBC', '私服', '限定'])],
  ['御崎海香', new Set(['☆35', 'アクア', 'ヒール', 'AABCC', 'あすなろ市立南部中学校', '配布'])],
  ['牧カオル', new Set(['☆35', 'フレイム', 'バランス', 'ABBCC', 'あすなろ市立南部中学校', '限定'])],
  ['タルト', new Set(['☆45', 'ライト', 'バランス', 'ABBBC', '私服', '聖乙女学園', '限定'])],
  ['リズ', new Set(['☆45', 'ダーク', 'アタック', 'AABBC', '私服', '聖乙女学園', '限定'])],
  ['メリッサ', new Set(['☆35', 'アクア', 'マギア', 'AABBC', '私服', '聖乙女学園', '配布'])],
  ['コルボー', new Set(['☆35', 'ダーク', 'アタック', 'ABBCC', '私服', '聖乙女学園', '限定'])],
  ['エリザ', new Set(['☆45', 'フレイム', 'バランス', 'AABCC', '私服', '聖乙女学園', '限定'])],
  ['天乃鈴音', new Set(['☆45', 'フレイム', 'アタック', 'AAABC', '茜ヶ咲中学校', '限定'])],
  ['成見亜里紗', new Set(['☆35', 'ダーク', 'バランス', 'ABBCC', '茜ヶ咲中学校'])],
  ['詩音千里', new Set(['☆35', 'アクア', 'サポート', 'ABBCC', '茜ヶ咲中学校', '限定'])],
  ['高町なのは', new Set(['☆45', 'フレイム', 'バランス', 'AABBC', '私服', '限定'])],
  ['八神はやて', new Set(['☆35', 'フォレスト', 'マギア', 'AABCC', '私服', '配布'])],
  ['フェイト・T・ハラオウン', new Set(['☆45', 'ライト', 'アタック', 'ABBCC', '私服', '限定'])],
  ['キュゥべえ', new Set()],
]);
