import "./style.css";

function appInstance() {
	const hooks = {
		dropdownButton: document.querySelector("#products"),
		dropdownMenu: document.querySelector(".dropdown"),
	};

	function openDropdown(origin, target) {
		origin.addEventListener("click", () => {
			target.classList.toggle("hidden");
		});
	}

	function initiateInstance() {
		openDropdown(hooks.dropdownButton, hooks.dropdownMenu);
	}

	initiateInstance();
}

appInstance();
