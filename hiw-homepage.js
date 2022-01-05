function OnLoad() {
    document.getElementById("codename").value = navigator.appCodeName;
    document.getElementById("browsername").value = navigator.appName;
    document.getElementById("version").value = navigator.appVersion;
    document.getElementById("platform").value = navigator.platform;
    document.getElementById("useragent").value = navigator.userAgent;
    document.getElementById("language").value = navigator.language;
    document.judgement.submit();
}

document.getElementById("form");
document.getElementById("join");
document.getElementById("email");
document.getElementById("terms");

function Home() {
    form.style.display = "block";
    join.style.display = "none";
    email.style.display = "none";
    terms.style.display = "none"
}

function Terms() {
    form.style.display = "none";
    terms.style.display = "block";
}

function Join() {
    form.style.display = "none";
    terms.style.display = "none"
    join.style.display = "block";
}

function Email() {
    form.style.display = "none";
    email.style.display = "block";
    join.style.display = "none"
}

function Form() {
    form.style.display = "block";
    join.style.display = "none";
    email.style.display = "none";
    var submitted = false;
}
