document.getElementById("form");
document.getElementById("join");
document.getElementById("email");

function Join() {
    form.style.display ="none";
    join.style.display ="block";
}

function Email() {
    form.style.display ="none";
    email.style.display ="block";
    join.style.display ="none"
}

function Form() {
    form.style.display ="block";
    join.style.display ="none";
    email.style.display ="none";
    window.alert("内容が送信されました。口頭またはメールにて返答を致します｡");
    var submitted = false;
}
