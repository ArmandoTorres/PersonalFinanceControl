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
				parentElement.classList.add('open');
				loadPageFragment(parentElement.firstChild.nextSibling.getAttribute('load-page'));
			} else {
				parentElement.parentNode.classList.add('open')
				loadPageFragment(parentElement.getAttribute('load-page'))
			}
		});
	}
}

function loadPageFragment(page) {

	let xhr = new XMLHttpRequest();
	xhr.open('GET', page, true);
	xhr.onreadystatechange= function() {
	    if (this.readyState!==4) return;
	    if (this.status!==200) return; // or whatever error handling you want
	    document.getElementById('main-content').innerHTML= this.responseText;
	};
	xhr.send();

}