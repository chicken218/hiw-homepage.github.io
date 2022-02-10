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

$(function() {
	$('.home-button').click(function() {
		$('#form').show();
		$('#terms').hide();
		$('#policy').hide();
		$('#join').hide();
		$('#email').hide();
		$('#list').hide();
		$('#certification').hide();
	});
	$('.terms-button').click(function() {
		$('#form').hide();
		$('#terms').show();
		$('#policy').hide();
		$('#join').none();
		$('#email').hide();
		$('#list').hide();
		$('#certification').hide();
	});
	$('.policy-button').click(function() {
		$('#form').hide();
		$('#terms').hide();
		$('#policy').show();
		$('#join').hide();
		$('#email').hide();
		$('#list').hide();
		$('#certification').hide();
	});
	$('.join-button').click(function() {
		$('#form').hide();
		$('#terms').hide();
		$('#policy').hide();
		$('#join').show();
		$('#email').hide();
		$('#list').hide();
		$('#certification').hide();
	});
	$('.email-button').click(function() {
		$('#form').hide();
		$('#terms').hide();
		$('#policy').hide();
		$('#join').hide();
		$('#email').show();
		$('#list').hide();
		$('#certification').hide();
	});
	$('.member-link').click(function() {
		$('#form').hide();
		$('#terms').hide();
		$('#policy').hide();
		$('#join').hide();
		$('#email').hide();
		$('#list').hide();
		$('#certification').show();
	})
});

function OnSubmit() {
	var submitted = false;
	form.style.display = "block";
	join.style.display = "none";
	email.style.display = "none";
	list.style.display = "none";
	certification.style.display = "none";
}

document.getElementById("pin");

function CertificationFunction() {
	const input = pin.value;
	const hexadecimal = 457;
	const decimal = parseInt(hexadecimal, 16);
	if (input == decimal) {
		list.style.display = "block";
		certification.style.display = "none";
	}
}
