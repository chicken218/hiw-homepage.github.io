document.getElementById("form");
document.getElementById("join");

function Join() {
    form.style.display ="none";
    join.style.display ="block";
}

function Form() {
    form.style.display ="block";
    join.style.display ="none";
    window.alert("内容が送信されました。口頭またはメールにて返答を致します｡");
    var submitted = false;
}
