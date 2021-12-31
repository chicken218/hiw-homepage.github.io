document.getElementById("form");
document.getElementById("join");
document.getElementById("email");

function Home() {
    form.style.display ="block";
    join.style.display ="none";
    email.style.display ="none";
}

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
    var submitted = false;
}
