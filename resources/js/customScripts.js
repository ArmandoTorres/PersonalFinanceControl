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
			let mainContainer = document.getElementById('main-content')
			if (parentElement.nodeName == 'LI') {
				parentElement.classList.add('open')
				mainContainer.innerHTML = `<object type="text/html" data='${parentElement.firstChild.nextSibling.getAttribute('load-page')}' > </object>`
			} else {
				parentElement.parentNode.classList.add('open')
				mainContainer.innerHTML = `<object type="text/html" data='${parentElement.getAttribute('load-page')}' > </object>`
			}
		});
	}
}