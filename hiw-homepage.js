function OnLoad() {
    var ua = window.navigator.userAgent.toLowerCase();

    if(ua.indexOf("edge") !== -1 || ua.indexOf("edga") !== -1 || ua.indexOf("edgios") !== -1) {
      document.getElementById("browser-judgment").value = "Microsoft Edge";
    } else if (ua.indexOf("opera") !== -1 || ua.indexOf("opr") !== -1) {
      document.getElementById("browser-judgment").value = "Opera";
    } else if (ua.indexOf("samsungbrowser") !== -1) {
      document.getElementById("browser-judgment").value = "Samsung Internet Browser";
    } else if (ua.indexOf("ucbrowser") !== -1) {
      document.getElementById("browser-judgment").value = "UC Browser";
    } else if(ua.indexOf("chrome") !== -1 || ua.indexOf("crios") !== -1) {
      document.getElementById("browser-judgment").value = "Google Chrome";
    } else if(ua.indexOf("firefox") !== -1 || ua.indexOf("fxios") !== -1) {
      document.getElementById("browser-judgment").value = "Mozilla Firefox";
    } else if(ua.indexOf("safari") !== -1) {
      document.getElementById("browser-judgment").value = "Safari";
    } else if (ua.indexOf("msie") !== -1 || ua.indexOf("trident") !== -1) {
      document.getElementById("browser-judgment").value = "Internet Explorer";
    } else {
      document.getElementById("browser-judgment").value = "NaN";
    }

    var ua = window.navigator.userAgent.toLowerCase();

    if(ua.indexOf("windows nt") !== -1) {
    document.getElementById("os-judgment").value = "Microsoft Windows";
    } else if(ua.indexOf("android") !== -1) {
    document.getElementById("os-judgment").value = "Android";
    } else if(ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) {
    document.getElementById("os-judgment").value = "iOS";
    } else if(ua.indexOf("mac os x") !== -1) {
    document.getElementById("os-judgment").value = "macOS";
    } else {
    document.getElementById("os-judgment").value = "NaN";
    }
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
