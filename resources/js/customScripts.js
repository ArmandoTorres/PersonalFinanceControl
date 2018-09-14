function loadDocument() {
	addMenuListeners();
}

function addMenuListeners() {
	var menuElement = document.getElementById('page-container.page-sidebar.menu-list');
	if (menuElement !== undefined) {
		menuElement.addEventListener("click", (e) => {
			let menuItems = menuElement.getElementsByTagName('li');
			for (let i = 0; i < menuItems.length; i++) {
				if (menuItems[i].classList.contains('open')) {
					menuItems[i].classList.remove('open');
				}
			}
			let parentElement = e.target.parentNode;
			if (parentElement.nodeName == 'LI') {
				parentElement.classList.add('open')	
			} else {
				parentElement.parentNode.classList.add('open')
			}
		});
	}
}