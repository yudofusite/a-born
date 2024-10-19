"use strict";
window.onload = function() {				//読み込み演出
setTimeout(function() {
document.getElementById("road").style.width = "50%";
document.getElementById("road").style.background = "#ffffff";
	setTimeout(function()  {
	document.getElementById("roadgamen").style.opacity = "0";
	document.getElementById("road").style.left = "50%";
	document.getElementById("road2").style.left = "50%";
	condition = 1;
			setTimeout(function()  {
			document.getElementById("roadgamen").style.display = "none";
			},500);
	},500);
},200);
};

//save date---------------------------------------
var tdate = localStorage.getItem("umu");
let date = [];
if (tdate != null) {	//データがある場合
let area = localStorage.getItem(area);
let mon = localStorage.getItem(mon);
let dat = localStorage.getItem(dat);
let item = localStorage.getItem(item);
date.push([umu, area]);
} else {
date.push("null");
};
//umu データの有無。area セーブポイント場所 mon セーブ月 dat セーブ日 item アイテム。0100010のように持っているアイテムは１、持ってないものは０で表す
//----------------

let bg1 = document.getElementById("bg1");	//setup bg1 【width: 1000; height: 500;】
bg1.height = bg1.width * 0.5;
console.log(bg1.height);
bg1.setAttribute("width","1000px");
bg1.setAttribute("height","500px");
let bg1f =bg1.getContext("2d");
let bg2 = document.getElementById("bg2");	//setup bg2 【width: 1000; height: 500;】
bg2.height = bg2.width * 0.5;
console.log(bg2.height);
bg2.setAttribute("width","1000px");
bg2.setAttribute("height","500px");
let bg2f =bg2.getContext("2d");

//web audio api---------------------------------------
const se00 = new AudioContext();
const se01 = new Audio("bakuhatu.wav");
const se02 = se00.createMediaElementSource(se01);
se02.connect(se00.destination);
//main loop---------------------------------------

let condition = 0;
let main_loop = setInterval(function() {
	if (condition == 1) {
	opening();
	};
	if (condition == 2) {
	opening2();
	};
	if (condition == 3) {
	opening3();
	};
	if (condition == 4.2) {
	load_date();
	};
	if (condition == 4) {
	main_op();
	};

	if (condition == "op") {
	start_option();
	};
},1000 / 60);

//opening1-2---------------------------------------

let opening_counter = 0;
let opening_scene = 1;

function opening() {
	bg1f.clearRect(0, 0, 1000, 500);
	bg1f.fillStyle = "#000000";
	bg1f.fillRect(0, 0, 1000, 500);
if (opening_scene == 1) {
	bg1f.font = "bold 20px sans-serif";
	bg1f.fillStyle = "#ffffff";
	bg1f.letterSpacing = "10px";
	bg1f.textAlign = "center";
	if (oi(opening_counter) == 1 || opening_counter > 30) {
	bg1f.fillText("2024 yudofu-games", 500, 240);
	};
	if (opening_counter > 80) {
	opening_scene = 2;
	};
};
if (opening_scene == 2) {
	bg1f.font = "bold 20px sans-serif";
	bg1f.fillStyle = "#ffffff" + (3 * (80 - (opening_counter - 80))).toString(16);
	bg1f.letterSpacing = "10px";
	bg1f.textAlign = "center";
	bg1f.fillText("2024 yudofu-games", 500, 240);
	if (opening_counter > 165) {
	condition = 2;
	opening_counter = 0;
	opening_scene = 0;
	};
};

opening_counter++;
};

let cloud1 = new Image();	//bg1の雲
cloud1.src = "cloud1.png";
let cloud_bg1 = [];

function opening2() {
	bg1f.clearRect(0, 0, 1000, 500);
	bg1f.fillStyle = "#000000";
	bg1f.fillRect(0, 0, 1000, 500);
	bg1f.fillStyle = "#000200";
	bg1f.fillRect(0, 200, 1000, 300);
	bg2f.clearRect(0, 0, 1000, 500);
	bg2f.fillStyle = "#000000";
	bg2f.fillRect(0, 0, 1000, 500);
	if (opening_counter < 1100) {
	bg2f.clearRect(150, 50, 700, 300);
	} else {
	bg2f.clearRect(150, 50 + (opening_counter - 1100), 700, 300 - (opening_counter - 1100) * 2);
		if (opening_counter >= 1250) {
		opening_counter = 0;
		condition = 3;
	bg2f.clearRect(0, 0, 1000, 500);
		};
	};
	bg2f.font = "20px sans-serif";
	bg2f.textAlign = "center";

	op_mas("湯豆腐の湯気が消えて数千年", 40);
	op_mas("すっかり湯豆腐の存在は忘れ去られていた", 340);
	op_mas("書物にも残っていない歴史に", 640);
	op_mas("干渉できたのは奇跡だったのだろうか", 940);
	if (keydown == 1) {
	keydown = 0;
	opening_counter = 1250;
	};

	if (opening_counter % 30 == 0) {
	cloud_bg1.push([-300, rnd(150), rnd(3) + 3]);
	cloud_bg1.push([-300, rnd(150) + 150, rnd(4) + 6]);
	};

	if (cloud_bg1.length > 0) {
		for (let bg1c_edit = 0; bg1c_edit < cloud_bg1.length; bg1c_edit++) {
		bg1f.globalAlpha = 0.3;
		bg1f.drawImage(cloud1, cloud_bg1[bg1c_edit][0], cloud_bg1[bg1c_edit][1]);
		bg1f.globalAlpha = 1;
		cloud_bg1[bg1c_edit][0] += cloud_bg1[bg1c_edit][2];
			if (cloud_bg1[bg1c_edit][0] > 1000) {
			cloud_bg1.splice(bg1c_edit, 1);
			bg1c_edit --;
			};
		};
	};

	opening_counter++;
};

let logo = new Image();
logo.src="bornlogo.png";
let st_cur = 1;		//カーソルのやつ
let cur_time = 0;	//カーソル無受付時間

function opening3() {
cls(1)
	if (opening_counter < 100) {
		if (opening_counter > 50) {

		bg1f.font = "bold 40px sans-serif";
		bg1f.globalAlpha = 1;
		bg1f.textAlign = "center";
		bg1f.fillStyle = "#ffffff";
		bg1f.letterSpacing =  6 * (100 - opening_counter) + 20 + "px";
		bg1f.fillText("タイトル名現在考え中・・・", 500, 100);
		};
		bg1f.globalAlpha = opening_counter / 100;
		bg1f.drawImage(logo, 100, 200);
	} else {
	bg1f.globalAlpha = 1;
	bg1f.drawImage(logo, 100, 200);
	bg1f.font = "bold 40px sans-serif";
	bg1f.textAlign = "center";
	bg1f.fillStyle = "#ffffff";
	bg1f.letterSpacing = "20px";
	bg1f.fillText("タイトル名現在考え中・・・", 500, 100);

	bg1f.strokeStyle = "#ffffff40";		//スタートメニュー
	bg1f.strokeRect(400,  200, 500, 200);
	bg1f.fillStyle = "#cccccc";
	bg1f.font = "bold 10px sans-serif";
	bg1f.letterSpacing = "3px";
	bg1f.textAlign = "left";	
	bg1f.fillStyle = "#cccccc";
	bg1f.fillText("↑↓ 選択　／　Z 決定", 400, 410);
	bg1f.font = "bold 20px sans-serif";
	bg1f.textAlign = "center";
	bg1f.letterSpacing = "8px";
	bg1f.fillText("ニューゲーム", 650, 250);
	bg1f.fillText("ロードする", 650, 300);
	bg1f.fillText("設定とか", 650, 370);
	bg1f.fillStyle = "#ffffff90";
		if (st_cur == 1) {
		bg1f.fillRect(500, 260, 300, 2);
		};
		if (st_cur == 2) {
		bg1f.fillRect(500, 310, 300, 2);
		};
		if (st_cur == 3) {
		bg1f.fillRect(520, 380, 260, 2);
		};
		if (al_u == 1 && cur_time < 1) {
		cur_time = 15;
		st_cur--;
			if (st_cur < 1) {
			st_cur = 3;
			};
		};
		if (al_d == 1 && cur_time < 1) {
		cur_time = 15;
		st_cur++;
			if (st_cur > 3) {
			st_cur = 1;
			};
		};
		if (keydown == 0) {
		cur_time = 0;
		};
		if (keydown == 1 && enter == 1) {	//メニュー決定
			if (st_cur == 1) {	//ニューゲーム
			condition = 4;
			};
			if (st_cur == 2) {	//ロードする
			condition = 4.2;
			load_en_time = 60;
			};
			if (st_cur == 3) {	//オプション画面
			condition = "op";
			st_en_time = 20;
			};
		};
	};

	cur_time--;
	opening_counter++;
};

function op_mas(telop, basecounter) {
	if (opening_counter > basecounter && opening_counter < basecounter + 260) {
	if (opening_counter < basecounter + 10 || opening_counter > basecounter + 250) {
	bg2f.fillStyle = "#808080";
	} else {
	bg2f.fillStyle = "#ffffff";
	};
	bg2f.fillText(telop, 500, 450);
	};
};

let settings = [1,1,1,1];	//BGM,SE,環境音,ダッシュの設定（１でON）
let st_op_cu = 1;
let st_cu_time = 0;
let st_en_time = 0;
function start_option() {
	cls(1);
	bg1f.globalAlpha = 0.15;
	bg1f.drawImage(logo, 0, 0, 120, 120);
	bg1f.globalAlpha = 1;
	bg1f.font = "30px sans-serif";
	bg1f.fillStyle = "#cccccc";
	bg1f.textAlign = "left";
	bg1f.fillText("設定とか", 50, 50);
	bg1f.fillRect(50, 60, 500, 2);

	bg1f.font = "20px sans-serif";
	bg1f.fillText("BGM", 100, 120);
	bg1f.fillText("効果音", 100, 160);
	bg1f.fillText("環境音", 100, 200);
	bg1f.fillText("zダッシュ", 100, 240);
	bg1f.fillText("戻る", 100, 300);
	if (settings[0] == 0) {
	bg1f.fillStyle = "#0000cc";
	bg1f.fillText("OFF", 300, 120);
	} else {
	bg1f.fillStyle = "#cccccc";
	bg1f.fillText("ON", 300, 120);
	};
	if (settings[1] == 0) {
	bg1f.fillStyle = "#0000cc";
	bg1f.fillText("OFF", 300, 160);
	} else {
	bg1f.fillStyle = "#cccccc";
	bg1f.fillText("ON", 300, 160);
	};
	if (settings[2] == 0) {
	bg1f.fillStyle = "#0000cc";
	bg1f.fillText("OFF", 300, 200);
	} else {
	bg1f.fillStyle = "#cccccc";
	bg1f.fillText("ON", 300, 200);
	};
	if (settings[3] == 0) {
	bg1f.fillStyle = "#0000cc";
	bg1f.fillText("OFF", 300, 240);
	} else {
	bg1f.fillStyle = "#cccccc";
	bg1f.fillText("ON", 300, 240);
	};

	bg1f.fillStyle = "#cccccc";
		if (st_op_cu == 1) {
		bg1f.fillRect(100, 130, 300, 2);
		};
		if (st_op_cu == 2) {
		bg1f.fillRect(100, 170, 300, 2);
		};
		if (st_op_cu == 3) {
		bg1f.fillRect(100, 210, 300, 2);
		};
		if (st_op_cu == 4) {
		bg1f.fillRect(100, 250, 300, 2);
		};
		if (st_op_cu == 5) {
		bg1f.fillRect(100, 310, 300, 2);
		};
		if (al_d == 1 && st_cu_time < 1) {
		st_cu_time = 15;
		st_op_cu++;
			if (st_op_cu > 5) {
			st_op_cu = 1;
			};
		};
		if (al_u == 1 && st_cu_time < 1) {
		st_cu_time = 15;
		st_op_cu--;
			if (st_op_cu < 1) {
			st_op_cu = 5;
			};
		};
		if (keydown == 1 && enter == 1) {	//メニュー決定
			if (st_op_cu < 5 && st_en_time < 1) {
			st_en_time = 40;
				if (settings[st_op_cu - 1] == 1) {
				settings[st_op_cu - 1] = 0;
				} else {
				settings[st_op_cu - 1] = 1;
				};
			};
			if (st_op_cu == 5) {	//ニューゲーム
			condition = 3;
			st_cur = 1;
			st_op_cu = 1;
			keydown = 0;
			opening_counter = 50;
			};
		};
		if (keydown == 0) {
		st_cu_time = 0;
		st_en_time = 0;
		};
	st_cu_time--;
	st_en_time--;
	bg1f.font = "10px sans-serif";
	bg1f.letterSpacing = "5px";
	bg1f.fillText("↑↓ 変更するものを選択　／　Z 変更", 150, 400);

};

let load_en_time = 0;
function load_date() {
	cls(1);
	midasi("ロードする");
	if (date[0] == "null") {
	bg1f.font = "20px sans-serif";
	bg1f.fillText("保存されてるデータがありません！（断言）", 100, 200);
		if (enter == 1 && load_en_time < 1) {
			condition = 3;
			st_cur = 1;
			st_op_cu = 1;
			keydown = 0;
			opening_counter = 50;
		};
		if (keydown == 0) {
		load_en_time = 0;
		};
	} else {
	};
	load_en_time--;
};

let mainop_counter = 0;
function main_op() {
cls(1);
	if (mainop_counter % 20 == 0) {
	cloud_bg1.push([-300, rnd(150), rnd(3) + 6]);
	cloud_bg1.push([-300, rnd(150) + 150, rnd(4) + 8]);
	};

	if (cloud_bg1.length > 0) {
		for (let bg1c_edit = 0; bg1c_edit < cloud_bg1.length; bg1c_edit++) {
		bg1f.globalAlpha = 0.3;
		bg1f.drawImage(cloud1, cloud_bg1[bg1c_edit][0], cloud_bg1[bg1c_edit][1]);
		bg1f.globalAlpha = 1;
		cloud_bg1[bg1c_edit][0] += cloud_bg1[bg1c_edit][2];
			if (cloud_bg1[bg1c_edit][0] > 1000) {
			cloud_bg1.splice(bg1c_edit, 1);
			bg1c_edit --;
			};
		};
	};
	bg1f.fillStyle = "#000000";
	if (mainop_counter < 60) {
	bg1f.fillRect(0, mainop_counter * 6.67, 1000, 500);
	} else {
	bg1f.fillRect(0, 400, 1000, 200);
	};
	op_mas2("うわああああああ！！！！！！！！！！（絶叫）", 100);
	op_mas2("あああああ・・・（絶望）", 350);
	op_mas2("（爆発音）", 600);
mainop_counter++;
};

function op_mas2(telop2, basecounter2) {
	bg1f.font = "20px sans-serif";
	bg1f.textAlign = "center";
	bg1f.letterSpacing = "5px";
	if (mainop_counter > basecounter2 && mainop_counter < basecounter2 + 240) {
		if (mainop_counter < basecounter2 + 10 || mainop_counter > basecounter2 + 230) {
		bg1f.fillStyle = "#808080";
		} else {
		bg1f.fillStyle = "#ffffff";
		};
	bg1f.fillText(telop2, 500, 450);
	};
};

//tools---------------------------------------

function oi(oin) {
	return oin % 2;
};
function rnd(rndn) {
	return Math.floor(Math.random() * rndn);
};
function cls(cls_mode) {
	if (cls_mode == 1) {
	bg1f.globalAlpha = 1;
	bg1f.clearRect(0, 0, 1000, 500);
	bg1f.fillStyle = "#000000";
	bg1f.fillRect(0, 0, 1000, 500);
	};
};
function midasi(midasi_text) {
	bg1f.globalAlpha = 0.15;
	bg1f.drawImage(logo, 0, 0, 120, 120);
	bg1f.globalAlpha = 1;
	bg1f.font = "30px sans-serif";
	bg1f.fillStyle = "#cccccc";
	bg1f.textAlign = "left";
	bg1f.fillText(midasi_text, 50, 50);
	bg1f.fillRect(50, 60, 500, 2);
};
//key events---------------------------------------
let keydown = 0;	//キーが押されている
let al_u = 0;	//上
let al_d = 0;	//下
let al_r = 0;	//右
let al_l = 0;	//左
let enter = 0;

addEventListener("keydown",function(kq) {
keydown = 1;
	if (kq.key == "ArrowUp") {
	al_u = 1;
	};
	if (kq.key == "ArrowDown") {
	al_d = 1;
	};
	if (kq.key == "ArrowRight") {
	al_r = 1;
	};
	if (kq.key == "ArrowLeft") {
	al_l = 1;
	};
	if (kq.key == "z") {
	enter = 1;
	};
});
addEventListener("keyup",function(kq1) {
keydown = 0;
	if (kq1.key == "ArrowUp") {
	al_u = 0;
	};
	if (kq1.key == "ArrowDown") {
	al_d = 0;
	};
	if (kq1.key == "ArrowRight") {
	al_r = 0;
	};
	if (kq1.key == "ArrowLeft") {
	al_l = 0;
	};
	if (kq1.key == "z") {
	enter = 0;
	};
});
