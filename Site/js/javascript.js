document.body.insertAdjacentHTML("beforeend", "こんaにちは！<br>");
document.body.insertAdjacentHTML("beforeend", "<a href=\"#\">クリックaして</a><br>");
var num1 = 11;
var num2 = 5;
document.body.insertAdjacentHTML("beforeend", (num1 + num2) + "<br>"); //足し算
document.body.insertAdjacentHTML("beforeend", (num1 - num2) + "<br>"); //引き算
document.body.insertAdjacentHTML("beforeend", (num1 * num2) + "<br>"); //掛け算
document.body.insertAdjacentHTML("beforeend", (num1 / num2) + "<br>"); //割り算
document.body.insertAdjacentHTML("beforeend", (num1 % num2) + "<br>"); //余り
console.log("ログを出力する");
var items = ["バナナ", "リンゴ", "メロン", "ブドウ"];
for (var i = 0; i < items.length; i++) {
  console.log(items[i]);
}
items.forEach(function(val) {
  console.log(val);
});
items.forEach(function(val, index) {
  console.log(val + ":" + index);
});
var result = items.map(val => {
  return val + "を食べる";
});
console.log(result);
var lists = [
    { name: "バナナ", price: "100" },
    { name: "リンゴ", price: "200" },
    { name: "メロン", price: "400" },
    { name: "ブドウ", price: "250" },
];
lists.forEach(function(val) {
  console.log(val.name + ":" + val.price);
});

// パターン1の色設定開始
function color1() {
  document.bgColor = "#eeeeff"; // bgcolor：背景色
  document.fgColor = "#0080ff"; // text：文字の基本色
  document.linkColor = "#ff0000"; // link：リンク文字の色
}
// パターン1の色設定終了

// パターン2の色設定開始
function color2() {
  document.bgColor = "#fbeae6";
  document.fgColor = "#ff0000";
  document.linkColor = "#ff00ff";
}
// パターン2の色設定終了

function disp() {
  // 「OK」時の処理開始 ＋ 確認ダイアログの表示
  if (window.confirm('本当にいいんですね？')) {
    location.href = "confirm.html"; // example_confirm.html へジャンプ
  }
  // 「OK」時の処理終了

  // 「キャンセル」時の処理開始
  else {
    window.alert('キャンセルされました'); // 警告ダイアログを表示
  }
  // 「キャンセル」時の処理終了
}
