"use strict";

//空きマップ（=["-"]）
//マップ１面は50x25(20x20ブロック)の基本配置と自由配置（[種類,x,y],）、前面配置（任意、50x25）の組み合わせで描画。自由配置ブロックは基本配置ブロックの前面に配置される。mainbg、frontbgに描画。プレイヤーの上に描画されるのは前面配置ブロックのみ。
//マップデータは、[[基本配置データ],[自由配置データ],[全面配置データ]]で表される。

let map_date = [
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],	//10(9)
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],	//20(19)
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],
["-"],	//30(29)
["-"],
["-"],
["-"],
["-"],
["-"],	//35(34)
];