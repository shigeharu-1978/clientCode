$("body").append("こんにちは！<br>");
$("body").append("<a href=\"#\">クリックして</a><br>");
var num1 = 10;
var num2 = 5;
$("body").append((num1 + num2) + "<br>"); //足し算
$("body").append((num1 - num2) + "<br>"); //引き算
$("body").append((num1 * num2) + "<br>"); //掛け算
$("body").append((num1 / num2) + "<br>"); //割り算
$("body").append((num1 % num2) + "<br>"); //余り
console.log("ログを出力する");
var items = ["バナナ", "リンゴ", "メロン", "ブドウ"];
$.each(items, function(val) {
  console.log(val);
});
$.each(items, function(val, index) {
  console.log(val + ":" + index);
});
var result = $.map(items, function(val, index) {
  return val + "を食べる";
});
console.log(result);
var lists = [
    { name: "バナナ", price: "100" },
    { name: "リンゴ", price: "200" },
    { name: "メロン", price: "400" },
    { name: "ブドウ", price: "250" },
];
$.each(lists, function(val) {
  console.log(val.name + ":" + val.price);
});

// パターン1の色設定開始
$("input#color1").click(function () {
  document.bgColor = "#eeeeff"; // bgcolor：背景色
  document.fgColor = "#0080ff"; // text：文字の基本色
  document.linkColor = "#ff0000"; // link：リンク文字の色
});
// パターン1の色設定終了

// パターン2の色設定開始
$("input#color2").click(function () {
  document.bgColor = "#fbeae6";
  document.fgColor = "#ff0000";
  document.linkColor = "#ff00ff";
});
// パターン2の色設定終了
$("input#disp").click(function () {
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
});
