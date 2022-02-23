document.getElementById("body");
document.getElementById("header");
document.getElementById("main");
document.getElementById("link");
document.getElementById("outputsvg");
document.getElementById("linkDiv");

function OnLoad() {
	const linkHeight = link.offsetHeight;
    outputsvg.setAttribute("height", linkHeight + "px");
    outputsvg.setAttribute("width", linkHeight + "px");
    const headerHeight = header.offsetHeight + 64 + "px 0 64px";
	main.style.margin = headerHeight;
}

$(function() {
    $('#home-link').click(function() {
        location.replace("hiw-homepage.html");
    })
})
