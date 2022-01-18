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
}

function Terms() {
	form.style.display = "none";
	terms.style.display = "block";
	policy.style.display = "none";
	join.style.display = "none";
	email.style.display = "none";
}

function Policy() {
	form.style.display = "none";
	terms.style.display = "none";
	policy.style.display = "block";
	join.style.display = "none";
	email.style.display = "none";
}

function Join() {
	form.style.display = "none";
	terms.style.display = "none";
	policy.style.display = "none";
	join.style.display = "block";
	email.style.display = "none";
}

function Email() {
	form.style.display = "none";
	terms.style.display = "none";
	policy.style.display = "none";
	join.style.display = "none";
	email.style.display = "block";
}

function JoinSubmit() {
	navigator.geolocation.getCurrentPosition(function(position) {
		document.getElementById("latitude-join").value = position.coords.latitude;
		document.getElementById("longitude-join").value = position.coords.longitude;
		setTimeout(function() {
			document.getElementById("join").submit();
		}, 600);
		var submitted = false;
		form.style.display = "block";
		join.style.display = "none";
		email.style.display = "none";
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
	});
}
