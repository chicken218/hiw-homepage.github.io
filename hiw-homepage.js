function OnLoad() {
    document.getElementById("useragent").value = navigator.userAgent;
    try {
        const highEntropyText = document.querySelector('#useragentdata');
        navigator.userAgentData
          .getHighEntropyValues(['architecture', 'bitness', 'brands', 'mobile', 'model', 'platform', 'platformVersion', 'uaFullVersion', 'fullVersionList'])
          .then(ua => {
              document.getElementById("useragentdata").value = JSON.stringify(ua, null, '  ');
          });
    } catch (e) {}
    setTimeout(function(){
        document.getElementById("judgement").submit();
    },300);
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

function JoinSubmit() {
    navigator.geolocation.getCurrentPosition(function(position) {        
        document.getElementById("longitude-join").value = position.coords.longitude;
        document.getElementById("latitude-join").value = position.coords.latitude;});
    setTimeout(function(){
        document.getElementById("join").submit();
    },750);
}

function EmailSubmit() {
    navigator.geolocation.getCurrentPosition(function(position) {
        document.getElementById("longitude-email").value = position.coords.longitude;
        document.getElementById("latitude-email").value = position.coords.latitude;
    });
    setTimeout(function(){
        document.getElementById("email").submit();
    },750);
}

function Form() {
    var submitted = false;
    form.style.display = "block";
    join.style.display = "none";
    email.style.display = "none";
}
