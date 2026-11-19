
const container = document.getElementById("container");

// Create elements
const card = document.createElement("div");
const img = document.createElement("img");
const heading = document.createElement("h2");
const profession = document.createElement("span");
const description = document.createElement("p");
const button = document.createElement("button");

// Add class
card.setAttribute("class", "profile-card");

// Image attributes
img.setAttribute("src", "https://i.pravatar.cc/150?img=12");
img.setAttribute("alt", "Profile picture");

// Add content
heading.textContent = "Prakalp Pandey";
profession.textContent = "Frontend Developer";
description.textContent = "Learning JavaScript and building projects.";
button.textContent = "Say Hello";

// Add elements inside card
card.appendChild(img);
card.appendChild(heading);
card.appendChild(profession);
card.appendChild(description);
card.appendChild(button);

// Add card to container
container.appendChild(card);

// Button event
button.addEventListener("click", function () {
    alert("Hello Prakalp! Keep Learning 🚀");
});
