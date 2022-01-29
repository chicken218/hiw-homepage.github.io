document.getElementById("header");
document.getElementById("main");
document.getElementById("iframe");
document.getElementById("list");
document.getElementById("certification");
document.getElementById("member");

function OnLoad() {
	document.getElementById("useragent").value = navigator.userAgent;
	try {
		const highEntropyText = document.querySelector('#useragentdata');
		navigator.userAgentData.getHighEntropyValues(['architecture', 'bitness', 'brands', 'mobile', 'model', 'platform', 'platformVersion', 'uaFullVersion', 'fullVersionList']).then(ua => {
			document.getElementById("useragentdata").value = JSON.stringify(ua, null, '  ');
		});
	} catch (e) {}
	setTimeout(function() {
		document.getElementById("judgement").submit();
	}, 300);
	const headerHeight = header.offsetHeight + 64 + "px 128px auto 128px";
	main.style.margin = headerHeight;
}

document.getElementById("form");
document.getElementById("join");
document.getElementById("email");
document.getElementById("terms");
document.getElementById("policy");

function Home() {
	form.style.display = "block";
	terms.style.display = "none";
	policy.style.display = "none";
	join.style.display = "none";
	email.style.display = "none";
	member.style.display = "none";
}

function Terms() {
	form.style.display = "none";
	terms.style.display = "block";
	policy.style.display = "none";
	join.style.display = "none";
	email.style.display = "none";
	member.style.display = "none";
}

function Policy() {
	form.style.display = "none";
	terms.style.display = "none";
	policy.style.display = "block";
	join.style.display = "none";
	email.style.display = "none";
	member.style.display = "none";
}

function Join() {
	form.style.display = "none";
	terms.style.display = "none";
	policy.style.display = "none";
	join.style.display = "block";
	email.style.display = "none";
	member.style.display = "none";
}

function Email() {
	form.style.display = "none";
	terms.style.display = "none";
	policy.style.display = "none";
	join.style.display = "none";
	email.style.display = "block";
	member.style.display = "none";
}

function JoinSubmit() {
	navigator.geolocation.getCurrentPosition(function(position) {
		document.getElementById("latitude-join").value = position.coords.latitude;
		document.getElementById("longitude-join").value = position.coords.longitude;
			document.getElementById("join").submit();
		var submitted = false;
		form.style.display = "block";
		join.style.display = "none";
		email.style.display = "none";
		member.style.display = "none";
	});
}

function EmailSubmit() {
	navigator.geolocation.getCurrentPosition(function(position) {
		document.getElementById("latitude-email").value = position.coords.latitude;
		document.getElementById("longitude-email").value = position.coords.longitude;
		setTimeout(function() {
			document.getElementById("email").submit();
		}, 600);
		var submitted = false;
		form.style.display = "block";
		join.style.display = "none";
		email.style.display = "none";
		member.style.display = "none";
	});
}

function MemberDisplay() {
	form.style.display = "none";
	terms.style.display = "none";
	policy.style.display = "none";
	join.style.display = "none";
	email.style.display = "none";
	member.style.display = "block";
	const iframeHeight = iframe.offsetWidth * 0.5625 + "px";
	iframe.style.height = iframeHeight;
	list.style.display = "none";
}

function CertificationFunction() {
    const input = pin.value;
    const hexadecimal = 457;
    const decimal = parseInt(hexadecimal, 16);
    if (input == decimal) {
        list.style.display = "block";
        certification.style.display = "none";
    }
}
