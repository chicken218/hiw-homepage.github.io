document.getElementById("body");
document.getElementById("header");
document.getElementById("main");
document.getElementById("link");
document.getElementById("svg71");
document.getElementById("linkDiv");

function OnLoad() {
	const linkHeight = link.offsetHeight;
    svg71.setAttribute("height", linkHeight + "px");
    svg71.setAttribute("width", linkHeight * 1.5 + "px");
    const headerHeight = header.offsetHeight + 64 + "px 0 64px";
	main.style.margin = headerHeight;
}

$(function() {
    $('#home-link').click(function() {
        location.replace("hiw-homepage.html");
    })
})
