function createHome() {
  const homeDiv = document.createElement("div");
  homeDiv.className = "home";
  content.appendChild(homeDiv);

  const p1 = document.createElement("p");

  p1.innerHTML = "Lorem Ipsum Dolor Sit Amet Random Text";
  homeDiv.appendChild(p1);

  const img = document.createElement("img");
  img.src = "../src/pizzachef.jpeg";

  homeDiv.appendChild(img);

  const p2 = document.createElement("p");
  p2.innerHTML =
    "Restaurant hours:<br>Mon-Fri: 10:00-22:00<br>Sat-Sun: 10:00-00:00";
  homeDiv.appendChild(p2);
}

export { createHome };
