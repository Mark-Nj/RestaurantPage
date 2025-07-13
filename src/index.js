import "./style.css";
import foodImage from "./assets/food.png";

// Array for menu items
const kenyanFoods = [
    "Ugali",
    "Nyama Choma",
    "Sukuma Wiki",
    "Chapati",
    "Githeri",
    "Mutura",
    "Pilau",
    "Matoke",
    "Mandazi",
    "Samosa",
    "Tilapia Fry",
    "Omena",
    "Irio",
    "Managu",
    "Kachumbari",
    "Matumbo",
    "Wali wa Nazi",
    "Viazi Karai",
    "Mukimo"
];

// DOM Logic
(function homeDisplay() {
    const contentSection = document.getElementById("content");
    const image = document.createElement("img");
    image.src = foodImage;
    const h1 = document.createElement("h1");
    const p1 = document.createElement('p');
    h1.textContent = "HillSide Restaurant";
    p1.textContent = "Get the best of Africa's delicacies in one place." +
        " Experience the taste of Africa's diverse foods, drinks" +
        " with ingredients specially prepared for your utmost satisfaction.";
    const h2 = document.createElement("h2");
    const menu = document.createElement("ul");
    h2.textContent = "Today's Specials:";
    for (let food of kenyanFoods) {
        const kenyanFood = document.createElement("li");
        kenyanFood.textContent = food;
        menu.appendChild(kenyanFood);
    }
    contentSection.appendChild(image);
    contentSection.appendChild(h1);
    contentSection.appendChild(p1);
    contentSection.appendChild(h2);
    contentSection.appendChild(menu);
})()
