$(function() {
    // メッセージを上書きする
    $.extend($.validator.messages, {
        minlength: $.validator.format("{0}文字以上の文字を入力してください"),
        maxlength: $.validator.format("{0}文字以下の文字を入力してください"),
        rangelength: $.validator.format("{0}文字から{1}文字の値を入力してください。"),
        required: "値を入力してください。",
        equalTo: "正しい値を入力してください。",
        email: "正しいメールアドレスを入力してください。",
        digits: "数値を入力してください。"
    });

});
