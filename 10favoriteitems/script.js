// Array of 10 favorite items
let favorites = [
    "Asus Zenbook",
    "Google Pixel 9",
    "Bose headphones",
    "Oakley backpack",
    "Montblanc pen",
    "Microtech SOCOM Elite Auto",
    "Resident Evil 9",
    "Nike Air Force 1s",
    "Suunto Core watch",
    "Cartier sunglasses"
];

// Get the ul element
let list = document.getElementById("favoriteList");

// Loop through array and add items
for (let i = 0; i < favorites.length; i++) {
    let li = document.createElement("li");
    li.textContent = favorites[i];
    list.appendChild(li);
}