document.getElementById("form");
document.getElementById("join");

function Join() {
    form.style.display ="none";
    join.style.display ="block";
}

function Form() {
    form.style.display ="block";
    join.style.display ="none";
    window.alert("内容が送信されました｡\n口頭またはメールアドレスにて結果をお伝えします｡");
    var submitted = false;
}
