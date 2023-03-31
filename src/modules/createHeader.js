function createHeader() {
  let headerDiv = document.createElement("div");
  headerDiv.id = "header";
  content.appendChild(headerDiv);

  let headerLogoDiv = document.createElement("div");
  headerLogoDiv.id = "header-logo";
  headerLogoDiv.textContent = "Title";
  headerDiv.appendChild(headerLogoDiv);

  let headerMenuDiv = document.createElement("div");
  headerMenuDiv.id = "header-menu";

  let homeBtn = document.createElement("button");
  homeBtn.innerHTML = "Home";
  homeBtn.id = "homeBtn";
  headerMenuDiv.appendChild(homeBtn);
  let menuBtn = document.createElement("button");
  menuBtn.innerHTML = "Menu";
  menuBtn.id = "menuBtn";
  headerMenuDiv.appendChild(menuBtn);

  let contactBtn = document.createElement("button");
  contactBtn.innerHTML = "Contact";
  contactBtn.id = "menuBtn";
  headerMenuDiv.appendChild(contactBtn);

  headerDiv.appendChild(headerMenuDiv);
}

export { createHeader };
