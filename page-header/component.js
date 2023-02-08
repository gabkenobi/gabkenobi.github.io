const navLinks = [
	["Início", "/", "_self"],
	["Currículo", "/resume.html", "_self"],
	["GitHub", "https://github.com/gabkenobi/", "_blank"],
	["LinkedIn", "https://linkedin.com/in/gabonagio/", "_blank"]
]

class PageHeader extends HTMLElement {
	connectedCallback() {
		const header = document.createElement("header");
		const titleDiv = document.createElement("div");
		const pageTitle = document.createElement("h1");
		pageTitle.textContent = "Gabriel Pires Bonagio";
		titleDiv.appendChild(pageTitle);
		header.appendChild(titleDiv);
		header.appendChild(navBar(navLinks));
		this.appendChild(header);
	}
}

function navBar(webPageList) {
	let nav = document.createElement("nav");
	let ul = document.createElement("ul");
	ul.className = "navigation-list";
	
	for (let i = 0; i < webPageList.length; i += 1) {
		let li = document.createElement("li");
		let a = document.createElement("a");

		li.setAttribute("class", "navigation-link");
		a.textContent = webPageList[i][0];
		a.href = webPageList[i][1];
		a.target = webPageList[i][2];

		li.appendChild(a);
		ul.appendChild(li);
	}

	nav.appendChild(ul);
	return nav;
}

function addCSS() {
	let css = document.createElement("link");
	css.setAttribute("rel", "stylesheet");
	css.setAttribute("href", "/page-header/style.css");
	document.head.appendChild(css);
}

addCSS();
customElements.define("page-header", PageHeader);